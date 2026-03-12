/**
 * Mock star history for offline development.
 * Add ?mock=1 to the URL to use mock data and avoid GitHub API calls.
 */

(function () {
    const start = new Date('2021-03-15');
    const end = new Date();

    function generateMockHistory(totalStars, numPoints = 100) {
        const totalMs = end - start;
        const raw = [];
        for (let i = 0; i <= numPoints; i++) {
            const date = new Date(start.getTime() + (totalMs * i) / numPoints);
            const smooth = i === numPoints ? totalStars : (i / numPoints) * totalStars;
            const noise = (Math.random() - 0.5) * 2 * Math.min(8, smooth * 0.08);
            raw.push({ date: date.toISOString().slice(0, 10), starNum: smooth + noise });
        }
        const points = raw.map((p, i) => ({
            date: p.date,
            starNum: Math.max(1, Math.round(p.starNum)),
        }));
        for (let i = 1; i < points.length; i++) {
            if (points[i].starNum < points[i - 1].starNum) {
                points[i].starNum = points[i - 1].starNum;
            }
        }
        points[points.length - 1].starNum = totalStars;
        return points;
    }

    window.STAR_HISTORY_MOCK = {
        'Drarig29/brackets-manager.js': generateMockHistory(320),
        'Drarig29/brackets-viewer.js': generateMockHistory(280),
    };

    const params = new URLSearchParams(location.search);
    const mockParam = params.get('mock');
    if (mockParam === '1') {
        window.USE_MOCK_STAR_HISTORY = true;
    }
})();
