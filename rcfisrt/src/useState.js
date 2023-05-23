import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import "./ustst.css"

export default function CountApp(){
    const[count, setCount] = useState(0);
    const[countt, setCountt] = useState(0);
    const increaseCounterHandler = () =>{
        setCount(count + 1);
        setCountt(count);
    
    }
    const decreaseCounterHandler = () =>{
        setCount(count - 1);
        setCountt(count);
    }
    const resetCounterHandler = () =>{
        setCount(0);
        setCountt(0);
    }
    return<div className="container">
        <p>Counting App</p>
        <h1>{count}</h1>
        <h1>{countt}</h1>
        <button className="btninccount" onClick={increaseCounterHandler}>+</button>
        <button className="btnReset" onClick={resetCounterHandler}>Reset</button>
        <button className="btndeccount" onClick={decreaseCounterHandler}>-</button>
    </div>
} 