import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import "./ustst.css"
export default function EventClick(){
    const[headerTxt, setHeadingText] = useState("Hello");
    const[msHover, setMouseHover] = useState(false);
    const handleClick = () =>{
        setHeadingText("Submited");
    }
    const handleMouseOver = () =>{
        setMouseHover(true);
    }
    const handleMouseout = () =>{
        setMouseHover(false);
    }
    return<div className="container2">
        <p>{headerTxt}</p>
        <input className="inp" type="text" placeholder="Enter a username?" /><br/>
        <button style={{backgroundColor: msHover ?"black":"white"}}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseout}
        className="btnsubmit"
        >Submit</button>
    </div>
} 

