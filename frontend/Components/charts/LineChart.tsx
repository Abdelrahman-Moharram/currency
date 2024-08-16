import React from 'react'
import {  Line  } from 'react-chartjs-2';


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';


  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  interface Props{
    data: any;
    legend: string
  }
export const LineChart = ({data, legend}:Props) => {
  
    const options:any = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: legend,
          },
        },
      };
  return (
    <Line options={options} data={data} />
  )
}