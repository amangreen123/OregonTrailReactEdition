import React, { useEffect, useState} from "react";
import "./setup.css";
import bg from "./images/gettyimages-3090888-2.jpg";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GameScreen1 from "./pages/GameScreen1";
import GameScreen2 from "./pages/GameScreen2";
import GameScreen3 from "./pages/GameScreen3";
import GameScreen4 from "./pages/GameScreen4";
import GameScreen5 from "./pages/GameScreen5";


///This is the setup page of the app
//It is the first page that is rendered when the app is started
//It displays a message and a button to start the game
//The message is fetched from the server
function SetUp() {

    //how to add that ca

    return (
        <div className="setup" style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", height: "1000px", backgroundSize: "cover", backgroundPosition: "center",}}>
            <h1>SETUP</h1>
            <h2><GameScreen1></GameScreen1></h2>
            <div id="data"/>
        </div>
    );
}


export default SetUp;
