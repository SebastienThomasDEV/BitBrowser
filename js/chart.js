export const labels = [];

export const data = {
    labels: labels,
    datasets: [{
        label: 'BTC/EUR',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [],
    },
    {
        label: 'ETH/EUR',
        backgroundColor: 'rgb(124,252,0)',
        borderColor: 'rgb(124,252,0)',
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
    document.getElementById('MyChart'),
    config
);

export let func_create = function add_graph(active_graph) {
    let len = active_graph.length
    if (len === 0) {
        const myChart = new Chart(
            document.getElementById('MyChart'),
            config
        );
        let graph = document.createElement("canvas");
        graph.setAttribute('id',`Chart${len}`);
    } else {
        let graph = document.createElement("canvas");
        graph.setAttribute('id',`Chart${len-1}`);
        const myChart = new Chart(
            document.getElementById(`Chart${len-1}`),
            config
        );
    }
}

//
async function addData(chart) {
    let new_data = await getData()
    for (let i = 0; i< new_data.length; i++) {
        let fresh = await new_data[i]
        chart.data.datasets[i].data.push(fresh["EUR"])
    }
    let date = new Date;
    chart.data.labels.push(`${date.getHours()}h${date.getMinutes()}`)
    chart.update();
}

async function getData() {
    let response1 = await fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR')
    let data_graph = [response1.json()]
    return data_graph
}


function build_graph(nb_graph) {
    const graph = document.createElement("canvas"); //créer un element HTML => canvas
    graph.setAttribute('id',`Chart${nb_graph}`); //donne un id à l'element HTML => id incrémentable
    const choice = "BTC"
    const config = config_graph(choice)
    const builded = new Chart(graph,config);
    $('.add_crypto').append(graph);
    setInterval(() => {
        addData(builded);}, 10000);
}

function config_graph(choice) {
    let color = [alea(0, 255),alea(0, 255),alea(0, 255)]
    const labels = []
    const data = {
        labels: labels,
        datasets: [{
            label: `${choice}/EUR`,
            backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})`,
            borderColor: `rgb(${color[0]},${color[1]},${color[2]})`,
            data: [],
        }]
    }

    const config = {
        type: 'line',
        data: data,
        options: {}
    }

    return config
}

function alea(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}





const start_btn = document.querySelector(".start");
const close_btn = document.querySelector(".close");
const add_btn = document.querySelector(".add_btn");
let nb_graph = 0

add_btn.addEventListener('click', () => {
    build_graph(nb_graph)
    nb_graph++
})


let crypto = [];
let choice = '';
let url = `https://min-api.cryptocompare.com/data/price?fsym=${choice}&tsyms=EUR;`;









