import React, { useEffect, useState} from "react";
import "./setup.css";
import bg from "./images/gettyimages-3090888-2.jpg";
import Fader from "./components/Fader";
import Navigation from "./components/Navigation";

///This is the setup page of the app
//It is the first page that is rendered when the app is started
//It displays a message and a button to start the game
//The message is fetched from the server


// fetch sends a req to the endpoint to get screen data
// gets response from endpoint
//stores response in a state variable
// displays state variable and renders it to the screen
// when button is clicked, it sends a req to the endpoint to get the next screen data

function SetUp() {


    return (
        <div className="setup" style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", height: "1000px", backgroundSize: "cover", backgroundPosition: "center",}}>
            <h1>SETUP</h1>
            <h2>
                <Fader text="Press Space Bar to Go Back To The Main Menu" /><Navigation />
            </h2>
             <div id="data" />

</div>
    );
}

export default SetUp;