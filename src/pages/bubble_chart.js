import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
const Bubble_chart = () => {
  ChartJS.register(LinearScale, PointElement, Tooltip, Legend);
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "Red dataset",
        data: Array.from({ length: 50 }, () => ({
          x: [20, 13, 54, 28, 26, 97, 42, 14],
          y: [200, 113, 554, 228, 226, 997, 442, 114],
          r: [200, 133, 544, 288, 266, 977, 422, 144],
        })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Blue dataset",
        data: Array.from({ length: 50 }, () => ({
          x: [20, 13, 54, 28, 26, 97, 42, 14],
          y: [200, 113, 554, 228, 226, 997, 442, 114],
          r: [200, 133, 544, 288, 266, 977, 422, 144],
        })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="bubble_chart">
      <h1>Bouriga</h1>
      <Bubble options={options} data={data} />
    </div>
  );
};
export default Bubble_chart;
