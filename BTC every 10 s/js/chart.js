export const labels = [];

export const data = {
    labels: labels,
    datasets: [{
        label: 'BTC/EUR every 10s',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [],
    },
    {
        label: 'ETH/EUR every 10s',
        backgroundColor: 'rgb(124,252,0)',
        borderColor: 'rgb(124,252,0)',
        data: [],

    },
    {
        label: 'BNB/EUR every 10s',
        backgroundColor: 'rgb(255,233,0)',
        borderColor: 'rgb(255,233,0)',
        data: [],

    },
]
};


export const config = {
    type: 'line',
    data: data,
    options: {}
};


export const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
