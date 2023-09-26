import React, { useEffect, useState} from "react";
import "./setup.css";
import bg from "./images/gettyimages-3090888-2.jpg";
import Fader from "./components/Fader";
import Navigation from "./components/Navigation";
import {func} from "prop-types";

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
   let [data,setData]= useState("")
    let [screenId, setScreenId] = useState(0)
    async function getGameScreens(screenId){
        let responseData = {};
        try {
            const response = await fetch("http://localhost:8000/api/setup/screen/" + screenId );
            // When we get a response, convert to Text
            responseData = await response.text();
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
        } catch (error) {
            console.error("Error fetching setup data:", error);
        }
        setData(responseData);
        document.getElementById("data").innerHTML = responseData;
        return responseData;
    }
     useEffect(() => {
       getGameScreens(0);
     }, []);

    document.addEventListener("click", function(event) {
        var targetElement = event.target || event.srcElement;
        if(targetElement.id == "bankerMenuItem") {
            savePlayerProfession("Banker");
            saveMoney(2000);
        }
        if(targetElement.id == "carpenterMenuItem") {
            savePlayerProfession("Carpenter");
            saveMoney(1800);
        }
        if(targetElement.id == "farmerMenuItem") {
            savePlayerProfession("Farmer");
            saveMoney(1500);
        }
        if(targetElement.id == "differencesMenuItem") {
            console.log("learn more!");
        }
    });

    document.addEventListener(("click"), function(event) {
        var targetElement = event.target || event.srcElement;
        if(targetElement.id == "page1sub") {
            savePlayerName(document.getElementById("player0").value);
        }
    });

    document.addEventListener(("click"), function(event) {
        var targetElement = event.target || event.srcElement;
        if(targetElement.id == "page2sub") {
            savePartyNames([
                 document.getElementById("player1").value
                , document.getElementById("player2").value,
                document.getElementById("player3").value,
                document.getElementById("player4").value]);
        }
    });

    document.addEventListener("click", function(event) {
        var targetElement = event.target || event.srcElement;
        if(targetElement.id == "marchItem") {
            saveStartMonth("March");
        }
        if(targetElement.id == "aprilItem") {
            saveStartMonth("April");
        }
        if(targetElement.id == "mayItem") {
            saveStartMonth("May");
        }
        if(targetElement.id == "juneItem") {
            saveStartMonth("June");
        }
        if(targetElement.id == "julyItem") {
            saveStartMonth("July");
        }

    });

    function savePlayerProfession(profession) {
        fetch("http://localhost:8000/api/setup/profession/" + profession, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                playerProfession: profession
            })
            }
        ).then(function(response) {
            if(response.status != 200) {
                console.log("Error saving player profession");

                return;
            }else{
                console.log("Player" + profession + "profession saved");
                getGameScreens(1);
            }

        })
    }

    function savePlayerName(name) {
        fetch("http://localhost:8000/api/setup/name/" + name, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                playerName: name
            })
        }).then(function(response) {
            if(response.status != 200) {
                console.log("Error saving" + name + "name");
                return;
            }
            else{
                console.log("Player" + name + "name saved");
                getGameScreens(2);
            }
        })
    }

    function savePartyNames(partyNames) {
        fetch("http://localhost:8000/api/setup/partyNames/" + partyNames, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                playerNames: partyNames
            })
        }).then(function(response) {
            if(response.status != 200) {
                console.log("Error saving" + partyNames + "name");
                return;
            }else{
                console.log("Player" + partyNames + "name saved");
                getGameScreens(3);
            }
        })
    }
    function saveStartMonth(month) {
        fetch("http://localhost:8000/api/setup/month/" + month, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                startMonth: month
            })
        }).then(function(response) {
            if(response.status != 200) {
                console.log("Error saving" + month + "month");
                return;
            }else{
                console.log("Player" + month + "month saved");
                getGameScreens(4);
            }
        })
    }
    function saveMoney(money) {
        fetch("http://localhost:8000/api/setup/money/" + money, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                playerMoney: money
            })
        }).then(function(response) {
            if(response.status != 200) {
                console.log("Error saving" + money + "money");
                return;
            }else{
                console.log("Player" + money + "money saved");
            }
        })
    }

    return (
        <div className="setup" style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", height: "1000px", backgroundSize: "cover", backgroundPosition: "center",}}>
            <h1>SETUP</h1>
            <h2>
                <Fader text="Press Space Bar to Go Back To The Main Menu" /><Navigation />
            </h2>
             <div id="data" />
            {/*<div id="selectedOption" onClick={() => {setScreenId(screenId + 1);*/}
            {/*    getGameScreens(screenId)} }>Click Me</div>*/}
</div>
    );
}





export default SetUp;