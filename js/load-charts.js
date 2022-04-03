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

    const activeIndex = tooltip.dataPoints.findIndex(data => data.element.y === tooltip.caretY);

    const repoName = tooltip.dataPoints?.[activeIndex]?.dataset?.label;
    const stars = tooltip.dataPoints?.[activeIndex]?.formattedValue;

    tooltipEl.innerHTML = `${repoName}: <span id="stars">${stars}</span>`

    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + 'px';
    tooltipEl.style.font = tooltip.options.bodyFont.string;
    tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
};

if (window.Chart) {
    const chart = new Chart('chart', {
        type: 'line',
        options: {
            aspectRatio: 2,
            interaction: {
                mode: 'nearest',
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
    });

    Promise.all(repos.map(repo => getStarHistory(`Drarig29/${repo.label}`))).then(histories => {
        const datasets = histories.map((history, i) => ({
            ...repos[i],
            data: history,
        }));

        chart.data = { datasets };
        chart.update();
    });
}