import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function ChartProviders() {
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Total 2020 (R$ Mil)',
        data: [12, 32, 20, 14, 50, 9, 21, 43, 82, 127, 72, 90],
        borderColor: [
          'rgb(204, 28, 14)',
          'rgb(204, 28, 14)',
          'rgb(204, 28, 14)',
          'rgb(204, 28, 14)',
          'rgb(204, 28, 14)',
          'rgb(204, 28, 14)',
          'rgb(0, 114, 173)',
          'rgb(0, 114, 173)',
          'rgb(0, 114, 173)',
          'rgb(0, 114, 173)',
          'rgb(0, 114, 173)',
          'rgb(0, 114, 173)',
          
        ],
        backgroundColor: [
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(59, 161, 213)',
          'rgb(59, 161, 213)',
          'rgb(59, 161, 213)',
          'rgb(59, 161, 213)',
          'rgb(59, 161, 213)',
          'rgb(59, 161, 213)',
          
        ]
      },
    ]
  }

  return (
    <Doughnut data={ data } />
  );
}

export default ChartProviders;