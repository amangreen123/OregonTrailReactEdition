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
   let [data,setData]= useState("")
    // let [screenId, setScreenId] = useState(0)
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

    function updatePlayerData() {
        fetch("http://localhost:8000/api/setup/updatePlayer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                playerName: document.getElementById("player0").value,
                playerProfession: document.getElementById("playerProfession").value,
                playerMoney: document.getElementById("playerMoney").value,
                startMonth: document.getElementById("startMonth").value
            })
        })
    }

    //click handlers
    document.addEventListener("click", function(event) {
        var targetElement = event.target || event.srcElement;
        if(targetElement.id === "bankerMenuItem") {
            updatePlayerData({playerProfession: "Banker", playerMoney: 2000});
        }
        if(targetElement.id === "carpenterMenuItem") {
            updatePlayerData({playerProfession: "Carpenter", playerMoney: 1800});
        }
        if(targetElement.id === "farmerMenuItem") {
            updatePlayerData({playerProfession: "Farmer", playerMoney: 1500});
        }
        if(targetElement.id === "differencesMenuItem") {
            console.log("learn more!");
        }
    });

    document.addEventListener(("click"), function(event) {
        var targetElement = event.target || event.srcElement;
        if(targetElement.id === "page1sub") {
            updatePlayerData(document.getElementById("player0").value);
        }
    });

    document.addEventListener(("click"), function(event) {
        var targetElement = event.target || event.srcElement;
        if(targetElement.id === "page2sub") {
            updatePlayerData([
                 document.getElementById("player1").value
                , document.getElementById("player2").value,
                document.getElementById("player3").value,
                document.getElementById("player4").value]);
        }
    });

    document.addEventListener("click", function(event) {
        var targetElement = event.target || event.srcElement;
        if(targetElement.id === "marchItem") {
         updatePlayerData({startMonth: "March"});
        }
        if(targetElement.id === "aprilItem") {
            updatePlayerData({startMonth: "April"});
        }
        if(targetElement.id === "mayItem") {
            updatePlayerData({startMonth: "May"});
        }
        if(targetElement.id === "juneItem") {
            updatePlayerData({startMonth: "June"});
        }
        if(targetElement.id === "julyItem") {
            updatePlayerData({startMonth: "July"});
        }

    });


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