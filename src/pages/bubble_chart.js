import React from "react";
import Navbar from "../component/Navbar/Navbar";

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
        label: "First Dataset",
        data: [
          {
            x: 20,
            y: 30,
            r: 15,
          },
          {
            x: 40,
            y: 10,
            r: 10,
          },
        ],
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };
  return (
    <div className="bubble_chart">
      <Navbar />
      <h1>Bouriga</h1>
      <Bubble options={options} data={data} />
    </div>
  );
};
export default Bubble_chart;
