import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const ChartWeedings = () => {
  const data = {
    labels: ['Rustico', 'Classico', 'Moderno' ],
    datasets: [
      {
        label: 'Total 2020 (R$ Mil)',
        data: [1258, 2221, 282],
        borderColor: [
          'rgb(204, 28, 14)',
          'rgb(204, 28, 14)',
          'rgb(204, 28, 14)',
          
        ],
        backgroundColor: [
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          
        ]
      },
    ]
  }

  return (
    <Doughnut data={ data } />
  );
}

export default ChartWeedings;