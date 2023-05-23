import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import "./ustst.css"
import CountApp from "./useState";
import EventClick from "./useState2";
import LightClick from "./lightbulb";
import ArrayList from "./useState3";

export default function Hook(){
    return<div className="grd">
        <CountApp/>
        {/* <EventClick/> */}
        <LightClick/>
        <ArrayList/>
    </div>
}