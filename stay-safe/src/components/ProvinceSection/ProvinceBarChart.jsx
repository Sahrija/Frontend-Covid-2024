import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, CategoryScale, BarElement } from 'chart.js';


ChartJS.register(CategoryScale, Tooltip, BarElement);



const ProvinceBarChart = ({ regionsData }) => {

    return (
        <>
            <Bar
                className='w-full'

                data={{
                    labels: regionsData?.map((region) => region.name),
                    datasets: [
                        {
                            label: 'Confirmed',
                            data: regionsData?.map((region) => region.numbers.confirmed),
                            borderColor: 'hsla(142.09,70.56%,45.29%)',
                            backgroundColor: 'hsla(142.09,70.56%,45.29%, 0.2)',
                        },
                        {
                            label: 'Recovered',
                            data: regionsData?.map((region) => region.numbers.recovered),
                            borderColor: 'hsla(198.63,88.66%,48.43%)',
                            backgroundColor: 'hsla(198.63,88.66%,48.43%, 0.2)',
                        },
                        {
                            label: 'Treatment',
                            data: regionsData?.map((region) => region.numbers.treatment),
                            borderColor: 'hsl(45.4,93.39%,47.45%)',
                            backgroundColor: 'hsl(45.4,93.39%,47.45%, 0.2)',
                        },
                        {
                            label: 'Death',
                            data: regionsData?.map((region) => region.numbers.death),
                            borderColor: 'hsla(0,84.24%,60.2%)',
                            backgroundColor: 'hsla(0,84.24%,60.2%, 0.2)',
                        },
                    ]
                }}

                options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    indexAxis: 'x',
                    elements: {
                        bar: {
                            borderWidth: 1,
                            borderRadius: 3,
                        },
                    },
                    plugins: {
                        legend: { position: 'top', },
                        title: {
                            display: true,
                            text: 'Chart.js Bar Chart'
                        }
                    }
                }}
            >

            </Bar>
        </>
    )
}


export default ProvinceBarChart;
