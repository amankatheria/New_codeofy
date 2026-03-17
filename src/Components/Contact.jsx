import React from "react";
import Home from "./Contactpage/Home";
import Ans from "./Contactpage/Ans";
import Startcard from "./Contactpage/Startcard";
import Leftcard from "./Contactpage/Leftcard";

function Contact(){
    return(
        <> 
        <Home/>
        <Leftcard/>
          <Ans/>
        <Startcard/>

        </>
    )
}
export default Contact;