import React from "react";
import { Pie } from "react-chartjs-2";

const labelslist = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labelslist,
  datasets: [
    {
      label: "My first data",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 40, 16, 2],
    },
  ],
};

function Piechart() {
  return (
    <div className="bg-bg-white border border-secondary">
      <Pie data={data}></Pie>
    </div>
  );
}

export default Piechart;
