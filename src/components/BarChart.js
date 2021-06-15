import React from 'react'
import './index.css'

import {Bar,Radar,Doughnut,PolarArea} from 'react-chartjs-2'


const BarChart = () => {
    return (
        <div class="bar-chart">
        <Bar
            data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                    {
                        label: '# number of votes',
                        data: [12, 19, 3, 5, 1, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                    },
                    // {
                    //     label: 'Quantity',
                    //     data: [100,104,67,508,900,50],
                    //     backgroundColor: 'orange',
                    //     borderColor: 'red',
                    // }
                ]
            }}
            height={400}
            width={600}
            options = {{
                // indexAxis: 'y',
                maintainAspectRatio: false,
                scales: {
                    //  y: {
                    //     max: 50,
                    //   },
                
                    // yAxes: [
                    //     {ticks: {
                    //         beginAtZero: false
                    //     }}
                    // ],
                }
            }}
        />
        </div>
        )
} 

export default BarChart;
