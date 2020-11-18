import React from 'react';
import { Line } from 'react-chartjs-2';

function ChartInvoices() {
  
  const data = {
    labels: [	 '01',	 '02',	 '03',	 '04',	 '05',	 '06',	 '07',	 '08',	 '09',	 '10',	 '11',	 '12',	 '13',	 '14',	 '15',	 '16',	 '17',	 '18',	 '19',	 '20',	 '21',	 '22',	 '23',	 '24',	 '25',	 '26',	 '27',	 '28',	 '29',	 '30',	 '31'],

    datasets: [
      {
        label: 'Invoices Concluídos',
        data: [	0,	0,	0,	0,	7200,	6700,	0,	0,	0,	0,	0,	0,	13573,	18200,	3600,	0,	0,	36800,	6000,	0,	3499,98,	0,	0,	0,	0,	0,	54400,	59250,	0,	0,	0	],
        borderColor: ['rgb(220, 85, 90'],
        pointBackgroundColor: 'rgba(220, 85, 90)',
        fill: false

      },

      {
        label: 'Invoices Cancelados',
        data: [	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1500,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0	],
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



