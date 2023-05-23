import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import "./ustst.css"
export default function ArrayList(){
    const id = 0;
    const [name, setName] = useState('');
    const [arrlst, setArrlst] = useState([]);

    const storeData = event =>{
        setName(event.target.value)
    }
    const addToList = () =>{
          setArrlst(arrlst => [...arrlst, name])
    }

  
    return<div className="container3">
        <p>Array List</p>
        <input className="inp" onChange={storeData} value={name}  type="text" placeholder="Enter a username?" /><br/>
        <button onClick={addToList} className="btn4">Add</button>
    
      <ul className="previousSearch">
        {arrlst.map((name) => (<li> {name} </li> ))}
      </ul>
    </div>
} 

