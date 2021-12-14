const repos = [
    {
        label: 'brackets-manager.js',
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        hoverBackgroundColor: "rgba(255, 99, 132, 0.4)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
    },
    {
        label: 'brackets-viewer.js',
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        hoverBackgroundColor: "rgba(54, 162, 235, 0.4)",
        hoverBorderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
    }
];

const getOrCreateTooltip = (chart) => {
    let tooltipEl = chart.canvas.parentNode.querySelector('div');

    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.style.background = 'rgba(0, 0, 0, 0.5)';
        tooltipEl.style.borderRadius = '5px';
        tooltipEl.style.color = 'white';
        tooltipEl.style.opacity = 1;
        tooltipEl.style.pointerEvents = 'none';
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.transform = 'translate(-50%, 0)';
        tooltipEl.style.transition = 'all .1s ease';

        chart.canvas.parentNode.appendChild(tooltipEl);
    }

    return tooltipEl;
};

const externalTooltipHandler = (context) => {
    // Tooltip Element
    const { chart, tooltip } = context;
    const tooltipEl = getOrCreateTooltip(chart);

    // Hide if no tooltip
    if (tooltip.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return;
    }

    const repoName = tooltip.dataPoints?.[0]?.dataset?.label;
    const stars = tooltip.dataPoints?.[0]?.formattedValue;

    tooltipEl.innerHTML = `${repoName}: <span id="stars">${stars}</span>`

    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + 'px';
    tooltipEl.style.font = tooltip.options.bodyFont.string;
    tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
};

/*Promise.all(repos.map(repo => getStarHistory(`Drarig29/${repo.label}`))).then(histories => {
    const datasets = histories.map((history, i) => ({
        ...repos[i],
        data: history,
    }));*/

const datasets = [{
    ...repos[0],
    data: [
        {
            "date": "2020-08-01",
            "starNum": 3
        },
        {
            "date": "2020-09-08",
            "starNum": 4
        },
        {
            "date": "2020-09-08",
            "starNum": 4
        },
        {
            "date": "2020-09-08",
            "starNum": 4
        },
        {
            "date": "2020-09-17",
            "starNum": 5
        },
        {
            "date": "2020-09-21",
            "starNum": 6
        },
        {
            "date": "2020-10-20",
            "starNum": 8
        },
        {
            "date": "2020-10-20",
            "starNum": 8
        },
        {
            "date": "2020-10-20",
            "starNum": 8
        },
        {
            "date": "2020-11-21",
            "starNum": 10
        },
        {
            "date": "2020-11-21",
            "starNum": 10
        },
        {
            "date": "2020-11-21",
            "starNum": 10
        },
        {
            "date": "2020-12-04",
            "starNum": 12
        },
        {
            "date": "2021-01-13",
            "starNum": 14
        },
        {
            "date": "2021-01-13",
            "starNum": 14
        },
        {
            "date": "2021-01-13",
            "starNum": 14
        },
        {
            "date": "2021-01-13",
            "starNum": 14
        },
        {
            "date": "2021-02-24",
            "starNum": 15
        },
        {
            "date": "2021-02-24",
            "starNum": 15
        },
        {
            "date": "2021-02-24",
            "starNum": 15
        },
        {
            "date": "2021-02-24",
            "starNum": 15
        },
        {
            "date": "2021-03-03",
            "starNum": 19
        },
        {
            "date": "2021-05-17",
            "starNum": 22
        },
        {
            "date": "2021-05-17",
            "starNum": 22
        },
        {
            "date": "2021-05-17",
            "starNum": 22
        },
        {
            "date": "2021-05-17",
            "starNum": 22
        },
        {
            "date": "2021-05-17",
            "starNum": 22
        },
        {
            "date": "2021-05-17",
            "starNum": 22
        },
        {
            "date": "2021-05-17",
            "starNum": 22
        },
        {
            "date": "2021-06-03",
            "starNum": 23
        },
        {
            "date": "2021-06-03",
            "starNum": 23
        },
        {
            "date": "2021-06-18",
            "starNum": 24
        },
        {
            "date": "2021-07-02",
            "starNum": 25
        },
        {
            "date": "2021-07-19",
            "starNum": 27
        },
        {
            "date": "2021-07-19",
            "starNum": 27
        },
        {
            "date": "2021-07-23",
            "starNum": 28
        },
        {
            "date": "2021-08-12",
            "starNum": 30
        },
        {
            "date": "2021-12-14",
            "starNum": 46
        }
    ]
}]

new Chart('chart', {
    type: 'line',
    options: {
        aspectRatio: 2,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            title: {
                display: true,
                position: 'left',
                text: 'GitHub stars history'
            },
            tooltip: {
                enabled: false,
                position: 'nearest',
                external: externalTooltipHandler,
            }
        },
        parsing: {
            xAxisKey: 'date',
            yAxisKey: 'starNum'
        },
        scales: {
            x: {
                type: 'time',
                display: true,
                offset: true,
                time: { unit: 'day' }
            },
        }
    },
    data: { datasets },
});
/*});*/