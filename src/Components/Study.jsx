import React from "react";
import Home from"./Studypage/Home"
import Overview from "./Studypage/Overview";
import Studycard from "./Studypage/Studycardard";
import Result from "./Studypage/Result";
import Cto from"./Studypage/Cto"
import Sale from "./Studypage/Sale";

function Study() {
    return (
        <>
            <Home />
            <Overview />
            <Studycard />
            <Result />
            <Cto />
            <Sale />
        </>
    )
}
export default Study;