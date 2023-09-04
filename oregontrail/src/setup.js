import React, { useEffect, useState} from "react";
import "./setup.css";
import bg from "./images/gettyimages-3090888-2.jpg";
import Fader from "./components/Fader";
import Navigation from "./components/Navigation";

function SetUp() {
   let [data,setData]= useState("")
    let [screenId, setScreenId] = useState(0)
    async function getSetUpData(screenId){

        let responseData = {};
        try {
            const response = await fetch("http://localhost:8000/api/setup/screen/" + screenId );
            responseData = await response.text();
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
        } catch (error) {
            console.error("Error fetching setup data:", error);
        }
        setData(responseData)
        document.getElementById("data").innerHTML = responseData;
        return responseData;
    }
    useEffect( () => {
       getSetUpData(0)
    }, [])

    return (
        <div
            className="setup"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: "no-repeat",
                height: "1000px",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h1>SETUP</h1>
            <h2>
                <Fader text="Press Space Bar to Go Back To The Main Menu" />
                <Navigation />
            </h2>
            <div id="data" />
            <div id="selectedOption" onClick={() => {setScreenId(screenId + 1);
            getSetUpData(screenId)} }>Click Me</div>
</div>
    );
}

export default SetUp;