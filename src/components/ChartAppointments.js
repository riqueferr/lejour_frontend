import React from 'react';
import { Bar } from 'react-chartjs-2';

function ChartAppointments() {
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'CTotal 2020 (R$ Mil)',
        data: [35750, 11200, 18678, 8775, 5982, 10983, 17821,15982,22983, 13983, 30983,37983],
        borderColor: ['rgb(220, 85, 90'],
        pointBackgroundColor: 'rgba(220, 85, 90)',
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
      {
        label: 'CTotal 2019 (R$ Mil)',
        data: [23750, 8200, 12678, 3775, 4982, 7983, 14821, 12982, 17983, 10983, 25983, 30983],
        borderColor: ['rgba(255, 180, 27, 0.5)'],
        pointBackgroundColor: 'rgba(255, 180, 27, 0.7)',
        backgroundColor: [
          'rgb(196, 54, 42)',
          'rgb(196, 54, 42)',
          'rgb(196, 54, 42)',
          'rgb(196, 54, 42)',
          'rgb(196, 54, 42)',
          'rgb(196, 54, 42)',
          'rgb(0, 117, 178)',
          'rgb(0, 117, 178)',
          'rgb(0, 117, 178)',
          'rgb(0, 117, 178)',
          'rgb(0, 117, 178)',
          'rgb(0, 117, 178)',
        ]
        
      }
    ]
  }

  return (
    <Bar data={ data } />
  );
}

export default ChartAppointments;



