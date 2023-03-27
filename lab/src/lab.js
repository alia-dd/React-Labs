import React from "react";
import css from "./lab.css"
import { ReactDOM } from "react";
import { FaSmileBeam } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

export default function Lab(){
    return<div>
        <div className="page"  >
            <div className="headd" > {Bod()}</div>
            <div className="midl" > {midl()}</div>
            <div className="lop" > {foot()}</div>
        </div>   
    </div>
}
function Bod(){
    
    const listnav2 = [
        {name:'Home',link: '#'},
        {name:'Find Work',link: '#'},
        {name:'Career Opp',link: '#'},
        {name:'About',link: '#'}
     ];
    
    return<div>
        <h1 className="hd">CA204</h1>
        <div className="underline"></div>
        <lu className="lu" >

            {listnav2.map((values)=>
                <li key ={values.name} className="list">
                    <a href= {values.link}>{values.name}</a>
                </li>)}
        </lu>
    </div>
}
function midl(){
    return<div>
        <h2 className="midlh">I Have Completed My Assignments(<FaCheck/>)</h2>
    </div>
}
function foot(){
    return<div className="btmpr">
        <Welcome txt = "Welcome to out class of 2023" ick= {<FaSmileBeam/>} size = "25px" color="white" />
        <Welcome txt = "imformation about the class" size = "20px" color = "yellow"/>
        <Welcome txt = "there simply aren't enough entrepreneurs" color="white" size="20px"/>
        <Welcome txt = "providing adequate investment Opportunities" color="white" size="20px"/>
        <Welcome size="20px"/>
        <Welcome txt = "there simply aren't enough entrepreneurs" color="white" size="20px"/>
        <Welcome txt = "providing adequate investment Opportunities" color="white" size="20px"/>
        
        
    </div>
}
function Welcome(props) {

    return <p style={ {color:`${props.color}` , fontSize:`${props.size}`} }>
        {props.txt}
        {props.ick}
        </p>;
  }
    
