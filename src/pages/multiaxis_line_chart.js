import React, { useState } from "react";
import { calculate_data_by_type_and_month } from "./filtring_function";
import Select from "react-select";
import Navbar from "../component/Navbar/Navbar";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "../style/multiaxis_line_chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Multiaxis_line_chart = ({ trump_data, obama_data }) => {
  const [fromYear, setFromYear] = useState(null);
  const [toYear, setToYear] = useState(null);
  let from_date = "2000-01-01";
  let to_date = "2024-12-31";
  const selection_options = [
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
  ];
  if (fromYear !== null) {
    from_date = fromYear.value + "-01-01";
  }
  if (toYear !== null) {
    to_date = toYear.value + "-12-31";
  }
  let final_data1;
  let final_data2;
  final_data1 = calculate_data_by_type_and_month(
    trump_data,
    from_date,
    to_date
  );
  final_data2 = calculate_data_by_type_and_month(
    obama_data,
    from_date,
    to_date
  );

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Trump vs Obama",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Trump",
        data: final_data1,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132)",
        yAxisID: "y1",
      },
      {
        label: "Obama",
        data: final_data2,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="multiaxis_line_chart">
      <Navbar />
      <h1>Trump vs Obama </h1>
      <div className="year_selection">
        <div className="cell cell-1">From</div>
        <div className="cell cell-2">
          <Select
            defaultValue={fromYear}
            onChange={setFromYear}
            options={selection_options}
          />
        </div>
        <div className="cell cell-3">to</div>
        <div className="cell cell-4">
          <Select
            defaultValue={toYear}
            onChange={setToYear}
            options={selection_options}
          />
        </div>
      </div>
      <Line options={options} data={data} />
    </div>
  );
};
export default Multiaxis_line_chart;
