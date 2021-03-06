import React from 'react';
import { Line } from 'react-chartjs-2';

function ChartInvoices() {
  
  const data = {
    labels: [	 '01',	 '02',	 '03',	 '04',	 '05',	 '06',	 '07',	 '08',	 '09',	 '10',	 '11',	 '12',	 '13',	 '14',	 '15',	 '16',	 '17',	 '18',	 '19',	 '20',	 '21',	 '22',	 '23',	 '24',	 '25',	 '26',	 '27',	 '28',	 '29',	 '30',	 '31'],
    datasets: [
      {
        label: 'Invoices Concluídos',
        data: [	1467,	0,	0,	0,	0,	5000,	0,	0,	0,	0,	7000,	0,	0,	10900,	16500,	18600,	0,	0,	0,	0,	0,	0,	5440,	0,	0,	3120,	11000,	0,	0,	0,	0	],
        borderColor: ['rgb(220, 85, 90'],
        pointBackgroundColor: 'rgba(220, 85, 90)',

      },

      {
        label: 'Invoices Cancelados',
        data: [	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0	],
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



