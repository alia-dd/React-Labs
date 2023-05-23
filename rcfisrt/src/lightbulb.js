import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import "./ustst.css"
export default function LightClick(){
    const[onClick, setLight] = useState("https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg");
  
    const turnOn = () =>{
        setLight("https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg");
    }
    const turnOff = () =>{
        setLight("https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg");
    }
    return<div className="container2" style={{backgroundColor:"white"}}>
        <p>Light Bulb</p>
        <img src= {onClick} className="imgg" />
        
        <button onClick={turnOn} className="btn2"> ON </button>
        <button onClick={turnOff} className="btn3" > OFF </button>
    </div>
} 

