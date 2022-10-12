import { labels, data, config, myChart } from "./chart.js"

async function getDataBTC() {
    let response = await fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR')
    return response.json()
}
async function getDataETH() {
    let response = await fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR')
    return response.json()
}
async function getDataBNB() {
    let response = await fetch('https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=EUR')
    return response.json()
}

async function addData(chart) {
    const fresh_dataBTC = await getDataBTC()
    const fresh_dataETH = await getDataETH()
    const fresh_dataBNB = await getDataBNB()
    const date = new Date;
    data.labels.push(`${date.getHours()}h${date.getMinutes()}`) 
    data.datasets[0].data.push(fresh_dataBTC["EUR"])
    data.datasets[1].data.push(fresh_dataETH["EUR"])
    data.datasets[2].data.push(fresh_dataBNB["EUR"])
    chart.update();
}



setInterval(() => {
    addData(myChart)}, 10000);


