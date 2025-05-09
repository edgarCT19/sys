import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from "chart.js";
import "../../assets/styles/chart.css";

// Registrar los elementos de Chart.js que vamos a usar
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const Chart_pie = () => {
  // Datos para el gráfico
  const data = {
    labels: ['Category A', 'Category B', 'Category C'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Opciones del gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="right-content">
      <div className="justify-content-center align-items-center d-flex text-center">
        <div className="chart-card ">
          <h5 className="chart-title">Gráfico de Pastel</h5>
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Chart_pie;