import React from "react";
import { useState } from "react";
import Light from "./Light.jsx";

const TrafficLight = () => {

const [selected, setSelected] = useState("")
const handleClick = (e)=> {
    setSelected(e.target.id)
}

  return (
    <>
    <div>selected: {selected}</div>
    <div className="traffic-light-BG d-flex flex-column">
      <Light handleClick={handleClick} id="red" color="red" isSelected={selected === "red" ? "is-selected" : ""}></Light>
      <Light handleClick={handleClick} id="yellow" color="yellow" isSelected={selected === "yellow" ? "is-selected" : ""}></Light>
      <Light handleClick={handleClick} id="green" color="green" isSelected={selected === "green" ? "is-selected" : ""}></Light>
    </div>
    </>
  );
};

export default TrafficLight;
