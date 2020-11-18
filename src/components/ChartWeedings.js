import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const ChartWeedings = () => {
  const data = {
    labels: ['Rustico', 'Classico', 'Moderno' ],
    datasets: [
      {
        label: 'Total 2020 (R$ Mil)',
        data: [33.45, 59.05, 7.50],
        borderColor: [
          'rgb(226, 100, 90, 1)',
          'rgb(104, 191, 183, 1)',
          'rgb(255,184,84)',

        ],
        backgroundColor: [
          'rgb(226, 100, 90, 1)',
          'rgb(104, 191, 183, 1)',
          'rgb(255,184,84)',
          
        ]
      },
    ]
  }

  return (
    <Doughnut data={ data } />
  );
}

export default ChartWeedings;