import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from "chart.js";
import "../../assets/styles/chart.css";

// Registrar los elementos de Chart.js que vamos a usar
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const Desempeno = () => {
  // Datos para el gráfico de categorías
  const dataCategorias = {
    labels: ['Category A', 'Category B', 'Category C'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Datos para el gráfico comparativo de equipos
  const dataEquipos = {
    labels: ['Equipo 1', 'Equipo 2', 'Equipo 3'],
    datasets: [
      {
        data: [45, 25, 30], // Porcentajes de rendimiento de cada equipo
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Opciones comunes para los gráficos
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
        <div className="chart-container ">
        {/* Sección para el gráfico de categorías */}
        <div className="chart-card">
            <h5 className="chart-title">Gráfico de Categorías</h5>
            <div className="pie-chart">
            <Pie data={dataCategorias} options={options} />
            </div>
        </div>

        {/* Sección para el gráfico de rendimiento de equipos */}
        <div className="chart-card">
            <h5 className="chart-title">Rendimiento Comparativo de Equipos</h5>
            <div className="pie-chart">
            <Pie data={dataEquipos} options={options} />
            </div>
        </div>
        </div>
    </div>
  );
};

export default Desempeno;