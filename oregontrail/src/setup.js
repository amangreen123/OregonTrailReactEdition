import React from "react";
import "./setup.css"
import bg from "./images/gettyimages-3090888-2.jpg";
import Fader from "./components/Fader";
import Navigation from "./components/Navigation";
function SetUp (){
    return(
        <div className={"setup"} style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",height: '1000px',backgroundSize:"cover",backgroundPosition:"center"}}>
            <h1>
                SETUP
            </h1>
            <p>1. Be a banker from Boston
            </p>
            <p> 2. Be a carpenter from Ohio
            </p>
            <p> 3. Be a farmer from Illinois
            </p>
            <p>4. Find out the differences between the choices
            </p>
              <h2>
                  <Fader text={"Press Space Bar to Go Back To The Main Menu"}></Fader>
                  <Navigation/>
              </h2>
        </div>
    )
}


export default SetUp