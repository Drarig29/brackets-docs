// The MIT License
// 
// Copyright (c) 2020 Tim Qian
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// number of sample requests to do
const sampleNum = 15;

// return [1,2, ..., n]
const range = n => Array.apply(null, { length: n }).map((_, i) => i + 1);

/**
 * Get the star history for a given repository.
 * @param {String} repo - eg: 'timqian/jsCodeStructure'
 * @param {String} token - github access token
 * @return {Array} history - eg: [{date: 2015-3-1,starNum: 12}, ...]
 */
async function getStarHistory(repo, token) {
    async function get(url) {
        return fetch(url, {
            headers: {
                Accept: 'application/vnd.github.v3.star+json',
                Authorization: token ? `token ${token}` : undefined,
            }
        })
    }

    /**
     * generate Urls and pageNums
     * @param {String} repo - eg: 'timqian/jsCodeStructure'
     * @return {Object} {sampleUrls, pageIndexes} - urls to be fatched(length <=10) and page indexes
     */
    async function generateUrls(repo) {
        const initUrl = `https://api.github.com/repos/${repo}/stargazers`;   // used to get star info
        const initRes = await get(initUrl);

        /** 
         * link Sample (no link when star < 30):
         * <https://api.github.com/repositories/40237624/stargazers?access_token=2e71ec1017dda2220ccba0f6922ecefd9ea44ac7&page=2>;
         * rel="next", 
         * <https://api.github.com/repositories/40237624/stargazers?access_token=2e71ec1017dda2220ccba0f6922ecefd9ea44ac7&page=4>; 
         * rel="last"
         */
        const link = initRes.headers.link;

        const pageNum = link ? /next.*?page=(\d*).*?last/.exec(link)[1] : 1; // total page number

        // used to calculate total stars for this page
        const pageIndexes = pageNum <= sampleNum ?
            range(pageNum).slice(1, pageNum) :
            range(sampleNum).map(n => Math.round(n / sampleNum * pageNum) - 1); // for bootstrap bug

        // store sampleUrls to be requested
        const sampleUrls = pageIndexes.map(pageIndex => `${initUrl}?page=${pageIndex}`);
        return { firstPage: initRes, sampleUrls, pageIndexes };
    }

    const { sampleUrls, pageIndexes, firstPage } = await generateUrls(repo);

    // promises to request sampleUrls
    const getArray = [firstPage].concat(sampleUrls.map(url => get(url))).map(res => res.json());
    const resArray = await Promise.all(getArray);

    let starHistory = null;

    if (resArray[0] === undefined || resArray[0].length == 0) {
        throw new Error('Repo has no star history');
    }

    if (pageIndexes[pageIndexes.length - 1] > sampleNum) {
        starHistory = pageIndexes.map((p, i) => {
            return {
                date: resArray[i + 1].starred_at.slice(0, 10),
                starNum: 30 * ((p === 0 ? 1 : p) - 1), // page 0 also means page 1
            };
        });
    } else {
        // we have every starredEvent: we can use them to generate 15 (sampleNum) precise points
        const starredEvents = resArray.reduce((acc, r) => acc.concat(r), []);

        const firstStarredAt = new Date(starredEvents[0].starred_at);
        const daysSinceRepoCreatedAt = Math.round((new Date()) - firstStarredAt) / (1000 * 60 * 60 * 24);

        const dates = Array.from(new Array(50)).map((_, i) => {
            const firstStarredAtCopy = new Date(firstStarredAt);
            firstStarredAtCopy.setDate(firstStarredAtCopy.getDate() + Math.floor((daysSinceRepoCreatedAt / 50) * (i + 1)));
            return firstStarredAtCopy.toISOString().slice(0, 10);
        }, []);

        starHistory = dates.map((d, i) => {
            let starNum = 0;
            const firstStarredEventAfterDate = starredEvents.find((se, i) => {
                if (se.starred_at.slice(0, 10) >= d) {
                    starNum = i + 1;
                    return true
                }

                return false;
            })

            return firstStarredEventAfterDate && {
                date: firstStarredEventAfterDate.starred_at.slice(0, 10),
                starNum: starNum
            };
        }).filter(x => x);
    }

    // Better view for less star repos (#28) and for repos with too much stars (>40000)
    const resForStarNum = await get(`https://api.github.com/repos/${repo}`).then(res => res.json());
    const starNumToday = resForStarNum.stargazers_count;
    const today = new Date().toISOString().slice(0, 10);
    starHistory.push({
        date: today,
        starNum: starNumToday
    })

    return starHistory;
}

window.getStarHistory = getStarHistory;