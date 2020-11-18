import React from 'react';
import { Line } from 'react-chartjs-2';

function ChartInvoices() {
  
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Total 2020 (R$ Mil)',
        data: [35750, 11200, 18678, 8775, 5982, 10983, 17821, 15982, 22983, 13983, 30983, 37983],
        borderColor: ['rgb(220, 85, 90'],
        pointBackgroundColor: 'rgba(220, 85, 90)',

      },

      {
        label: 'Total 2019 (R$ Mil)',
        data: [23750, 8200, 12678, 3775, 4982, 7983, 14821, 12982, 17983, 10983, 25983, 30983],
        borderColor: ['rgba(255, 180, 27, 0.5)'],
        pointBackgroundColor: 'rgba(255, 180, 27, 0.7)',
      }
    ]
  }

  return (
    <Line data={data} />
  );
}

export default ChartInvoices;



