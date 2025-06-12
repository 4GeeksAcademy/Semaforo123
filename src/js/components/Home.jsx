import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	 const [ selectedColor, setSelectedColor ] = useState("red");
	 const colors = ["red", "yellow", "green"];

	 const changeColor = () => {
    const currentIndex = colors.indexOf(selectedColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setSelectedColor(colors[nextIndex]);
  };

	return (
		
		<div className="trafficLight">
			<div onClick={() => setSelectedColor ("red")}
			 
			className={
				"light red" + (selectedColor === "red" ? " glow" : "")
				}></div>
            <div onClick={() => setSelectedColor ("yellow")}
			 className={
				"light yellow" + (selectedColor === "yellow" ? " glow" : "")
				}></div>
            <div onClick={() => setSelectedColor ("green")}
			 className={
				"light green" + (selectedColor === "green" ? " glow" : "")
				}></div>
            <div className="pole"></div>
			<button className="btn btn-primary btn-lg mt-3" onClick={changeColor}> 
        </button>
		</div>
		
		
	);
};

export default Home;