import Chart from "chart.js/auto";
import {AbstractModule} from "../../core/vendor/AbtractModule";
export class HomeModule extends AbstractModule {
    constructor() {
        super();
        this.init();
    }

    init() {
        const ctx = document.getElementById('myChart') as HTMLCanvasElement;

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        console.log('Home module initialized');
    }
}