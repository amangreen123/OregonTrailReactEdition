import React, { useEffect, useState } from "react"
import "./setup.css"
import bg from "./images/gettyimages-3090888-2.jpg";
import Fader from "./components/Fader";
import Navigation from "./components/Navigation";


function SetUp() {
    const [setup, setSetup] = useState([]);

    const getSetupData = async () => {

             const response = await fetch("http://localhost:8000/api/setup/screen/0" );
             const responseData = await response.json();
             console.log("Response:", responseData);
             setSetup(responseData);

    };

    useEffect(() => {
        getSetupData();
    }, []);
    return (
        <div className="setup" style={{ backgroundImage:`url(${bg})`, backgroundRepeat: "no-repeat", height: '1000px', backgroundSize: "cover", backgroundPosition: "center" }}>
            <h1>SETUP
            </h1>
            <h2>
                <Fader text="Press Space Bar to Go Back To The Main Menu" />
                <Navigation />
            </h2>
        </div>
    );
}




export default SetUp