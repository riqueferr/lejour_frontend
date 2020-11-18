import React from 'react';
import { Bar } from 'react-chartjs-2';

function ChartAppointments() {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20','21', '22', '23', '24', '25', '26','27', '28', '29', '30'],
    datasets: [
      {
        label: 'Appointments Aprovados',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0],
        borderColor: ['rgb(220, 85, 90'],
        pointBackgroundColor: 'rgba(220, 85, 90)',
        backgroundColor: [
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
          'rgb(226, 100, 90)',
        ]
        
      },
      {
        label: 'Appointments Cancelados',
        data: [0, 3, 2, 1, 0, 1, 2, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 2, 3, 2, 1, 5, 3, 0, 0, 0, 2, 3, 3],
        borderColor: ['rgba(255, 180, 27, 0.5)'],
        pointBackgroundColor: 'rgba(255, 180, 27, 0.7)',
        backgroundColor: [
          'rgb(93, 93, 93)', 
          'rgb(93, 93, 93)', 
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
          'rgb(93, 93, 93)',
        ]
        
      }
    ]
  }

  return (
    <Bar data={ data } />
  );
}

export default ChartAppointments;



