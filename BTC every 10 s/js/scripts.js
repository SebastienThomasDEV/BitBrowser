

async function getData() {
    let response1 = await fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR')
    let data_graph = [response1.json()]
    return data_graph
}

async function addData(chart) {
    let new_data = await getData()
    for (let i = 0; i< new_data.length; i++) {
        let fresh = await new_data[i]
        console.log(chart.data)
        console.log(data.datasets)
        console.log(data.datasets.data)
        data.datasets.data.push(fresh["EUR"])
    }
    let date = new Date;
    data.labels.push(`${date.getHours()}h${date.getMinutes()}`)
    chart.update();
}

function alea(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function build_graph(nb_graph) {
    const graph = document.createElement("canvas"); //créer un element HTML => canvas
    graph.setAttribute('id',`Chart${nb_graph}`); //donne un id à l'element HTML => id incrémentable
    const choice = "BTC"
    const config = config_graph(choice)
    const builded = new Chart(graph,config);
    $('.add_crypto').append(graph);
    setInterval(() => {
        addData(build_graph);}, 10000);
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






const start_btn = document.querySelector(".start");
const close_btn = document.querySelector(".close");
const add_btn = document.querySelector(".add_btn");
let nb_graph = 0

add_btn.addEventListener('click', () => {
    build_graph(nb_graph)
    nb_graph++
})

$(".close").hide();
$(".graph_wpr").hide();
$(".add_crypto").hide();
$(".page_title").hide();



start_btn.addEventListener('click', () => {
    $(".close").show();
    $(".start").hide()
    $(".page_title").show();
    $(".description").hide();
    $(".add_crypto").show();
})

close_btn.addEventListener('click', () => {
    $(".start").show()
    $(".close").hide();
    $(".add_crypto").hide();
    $(".description").show();
    $(".page_title").hide();
})

let crypto = [];
let choice = '';
let url = `https://min-api.cryptocompare.com/data/price?fsym=${choice}&tsyms=EUR;`;



    




