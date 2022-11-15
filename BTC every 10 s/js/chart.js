// export const labels = [];

// export const data = {
//     labels: labels,
//     datasets: [{
//         label: 'BTC/EUR',
//         backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: 'rgb(255, 99, 132)',
//         data: [],
//     },
//     {
//         label: 'ETH/EUR',
//         backgroundColor: 'rgb(124,252,0)',
//         borderColor: 'rgb(124,252,0)',
//         data: [],
//     },
// ]
// };


// export const config = {
//     type: 'line',
//     data: data,
//     options: {}
// };


// // export const myChart = new Chart(
// //     document.getElementById('MyChart'),
// //     config
// // );

// export let func_create = function add_graph(active_graph) {
//     let len = active_graph.length
//     if (len === 0) {
//         const myChart = new Chart(
//             document.getElementById('MyChart'),
//             config
//         );
//         let graph = document.createElement("canvas");
//         graph.setAttribute('id',`Chart${len}`);
//     } else {   
//         let graph = document.createElement("canvas");
//         graph.setAttribute('id',`Chart${len-1}`);
//         const myChart = new Chart(
//             document.getElementById(`Chart${len-1}`),
//             config
//         );
//     }
// }
