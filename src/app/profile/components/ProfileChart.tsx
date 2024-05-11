// components/ProfileChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

const ProfileChart = () => {
    const data = {
      labels: ['Декабрь', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май'],
      datasets: [
        {
          label: 'Ваша оценка ',
          data: [3, 2, 3, 4, 5, 5],
          fill: false,
          backgroundColor: 'rgb(75, 192, 192)',
          borderColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.4
        },
      ],
    };
  
    const lastDataPoint = data.datasets[0].data[data.datasets[0].data.length - 1];
    const lastLabel = data.labels[data.labels.length - 1];
  
    const options = {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            // Установка шага между делениями на оси Y
            stepSize: 1
          }
        }
      },
      plugins: {
        annotation: {
          annotations: {
            labelAnnotation: {
              type: 'label',
              content: `Ваша оценка: ${lastDataPoint}`,
              xValue: lastLabel,
              yValue: lastDataPoint,
              backgroundColor: 'rgba(75, 192, 192, 0.7)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderRadius: 4,
              borderWidth: 1,
              color: '#fff',
              xAdjust: -70,
              yAdjust: 200
            }
          }
        },
        legend: {
            display: false // Скрыть легенду
          }
      }
    };
  
    return (
        <div style={{ width: '600px', height: '400px'}}>
          <Line data={data} options={options}/>
        </div>
      );
  };


export default ProfileChart;
