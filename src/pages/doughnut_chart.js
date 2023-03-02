import React, { useState } from "react";
import "./chart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Doughnut_chart = ({ trump_data, n }) => {
  let filtring_data = [];
  const [filtred_data, setFiltred_data] = useState(trump_data);
  const [entredDate, setEntredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEntredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("entredDate=\n", entredDate);
    let t = false;
    for (let i = 0; i < trump_data.length; i++) {
      if (entredDate === trump_data[i].Year) {
        t = true;
        filtring_data.push(trump_data[i]);
      }
    }
    if (filtring_data !== []) {
      setFiltred_data(filtring_data);
    }
  };
  console.log(n);
  console.log(trump_data);
  const data = {
    labels: ["Netural", "Positive", "Negative"],
    datasets: [
      {
        label: "# of Comments",
        data: n,
        backgroundColor: [
          "rgb(83, 127, 231)",
          "rgb(3, 201, 136)",
          "rgb(235, 69, 95)",
        ],
        borderColor: [
          "rgb(83, 127, 231)",
          "rgb(3, 201, 136)",
          "rgb(235, 69, 95)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="doughtnur_chart">
      <h1>Doughnut Chart</h1>
      <Doughnut data={data} />
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2020-01-01"
              max="2023-12-31"
              onChange={dateChangeHandler}
              value={entredDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};
export default Doughnut_chart;
