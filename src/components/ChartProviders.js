import React from 'react';
import { Radar } from 'react-chartjs-2';

const ChartProviders = () => {
  const data = {
      labels: ['Assessoria de Casamento', 'Buffet', 'Espaço', 'Foto e Filmagem', 'Lista de Presentes'],
      datasets: [{
          label: "Jan - Abr",
          data: [1, 0, 11, 0, 0, 0, 0],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(255, 99, 132)"
        }, {
          label: "Jun - Dez",  
          data: [12, 0, 25, 0, 0, 0, 0],
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      }

  return (
    <Radar data={ data } />
  );
  }

export default ChartProviders;