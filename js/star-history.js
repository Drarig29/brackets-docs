const STARS_PER_PAGE = 30;
const MAX_SAMPLE_PAGES = 15;

const range = (n) => Array.from({ length: n }, (_, i) => i);

/**
 * Fetch URL with optional GitHub token.
 * @param {string} url
 * @param {string} [token]
 * @returns {Promise<Response>}
 */
async function fetchWithToken(url, token) {
    return fetch(url, {
        headers: {
            Accept: 'application/vnd.github.v3.star+json',
            ...(token && { Authorization: `token ${token}` }),
        },
    });
}

/**
 * Get star history for a GitHub repository.
 * @param {string} repo - e.g. 'owner/repo'
 * @param {string} [token] - GitHub access token (optional, for higher rate limits)
 * @returns {Promise<Array<{date: string, starNum: number}>>} - e.g. [{ date: '2015-03-01', starNum: 12 }, ...]
 */
async function getStarHistory(repo, token) {
    if (window.USE_MOCK_STAR_HISTORY && window.STAR_HISTORY_MOCK && window.STAR_HISTORY_MOCK[repo]) {
        return Promise.resolve([...window.STAR_HISTORY_MOCK[repo]]);
    }

    const stargazersUrl = `https://api.github.com/repos/${repo}/stargazers`;

    const firstResponse = await fetchWithToken(stargazersUrl, token);
    const linkHeader = firstResponse.headers.get('link');
    const pageNum = linkHeader
        ? Math.min(Number(/page=(\d+)>;\s*rel="last"/.exec(linkHeader)?.[1] ?? 1), 100)
        : 1;

    const isSampled = pageNum > MAX_SAMPLE_PAGES;
    const pageIndexes = isSampled
        ? range(MAX_SAMPLE_PAGES).map((i) =>
              Math.round((i / (MAX_SAMPLE_PAGES - 1)) * (pageNum - 1))
          )
        : range(pageNum).slice(1);

    const urlsToFetch = [stargazersUrl, ...pageIndexes.map((p) => `${stargazersUrl}?page=${p + 1}`)];
    const responses = await Promise.all(urlsToFetch.map((url) => fetchWithToken(url, token)));
    const pages = await Promise.all(responses.map((r) => r.json()));

    if (!Array.isArray(pages[0]) || pages[0].length === 0) {
        throw new Error('Repo has no star history');
    }

    let starHistory;

    if (isSampled) {
        starHistory = pageIndexes.map((pageIndex, i) => ({
            date: pages[i][0].starred_at.slice(0, 10),
            starNum: pageIndex * STARS_PER_PAGE + 1,
        }));
    } else {
        const allEvents = pages.flat();
        starHistory = allEvents.map((event, i) => ({
            date: event.starred_at.slice(0, 10),
            starNum: i + 1,
        }));
    }

    const repoInfo = await fetchWithToken(`https://api.github.com/repos/${repo}`, token).then((r) =>
        r.json()
    );
    const today = new Date().toISOString().slice(0, 10);
    starHistory.push({
        date: today,
        starNum: repoInfo.stargazers_count,
    });

    return starHistory;
}

window.getStarHistory = getStarHistory;
