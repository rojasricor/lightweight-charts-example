import React from "react";
import ChartComponent from "./components/ChartComponent";
import initialData from "./data/index.json";

export default function App(props) {
  return <ChartComponent {...props} data={initialData}></ChartComponent>;
}
