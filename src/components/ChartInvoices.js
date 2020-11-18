import React from 'react';
import { Line } from 'react-chartjs-2';

function ChartInvoices() {
  
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Invoices Concluídos',
        data: [124025,	209222,	150782,	79027,	120226,	122111,	60112,	15000,	86583,	79239 ],
        borderColor: ['rgb(220, 85, 90'],
        pointBackgroundColor: 'rgba(220, 85, 90)',
        fill: false


      },

      {
        label: 'Invoices Cancelados',
        data: [100,	1500,	0,	0,	4220,	50010,	77350,	8000,	29550,	15200],
        borderColor: ['rgba(255, 180, 27, 0.5)'],
        pointBackgroundColor: 'rgba(255, 180, 27, 0.7)',
        fill: false

      }
    ]
  }

  return (
    <Line data={data} />
  );
}

export default ChartInvoices;



