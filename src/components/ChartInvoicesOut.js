import React from 'react';
import { Line } from 'react-chartjs-2';

function ChartInvoices() {
  
  const data = {
    labels: [	 '01',	 '02',	 '03',	 '04',	 '05',	 '06',	 '07',	 '08',	 '09',	 '10',	 '11',	 '12',	 '13',	 '14',	 '15',	 '16',	 '17',	 '18',	 '19',	 '20',	 '21',	 '22',	 '23',	 '24',	 '25',	 '26',	 '27',	 '28',	 '29',	 '30',	 '31'],
    datasets: [
      {
        label: 'Invoices Concluídos',
        data: [	25400,	48500,	32510,	14008,	10000,	0,	29000,	0,	27900,	0,	0,	0,	0,	7740,	65249,	0,	17598,4,	19200,	0,	0,	64750,	34715,6,	6700,	0,	0,	0,	24900,	0,	41900,	25228,	0	],
        borderColor: ['rgb(220, 85, 90'],
        pointBackgroundColor: 'rgba(220, 85, 90)',
        fill: false

      },

      {
        label: 'Invoices Cancelados',
        data: [	0,	0,	0,	27000,	10000,	0,	20,	0,	0,	0,	0,	0,	5000,	200,	0,	0,	0,	0,	0,	0,	0,	0,	0,	500,	0,	0,	0,	0,	21000,	0,	0	],
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



