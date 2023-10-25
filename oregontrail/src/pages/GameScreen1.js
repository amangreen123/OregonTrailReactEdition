import React from 'react';
import "../components/global.css";
import bg from "../images/gettyimages-3090888-2.jpg";

import {useState, useEffect} from "react";
import axios from "axios";

const GameScreen1 = () => {

    const [playerProfession, setPlayerProfession] = useState("");
    const [playerMoney, setPlayerMoney] = useState(0);
    const updatePlayerData = async () => {
        try {
          const response = await axios.post("http://localhost:8000/api/setup/updatePlayer", {
              playerProfession: playerProfession,
              playerMoney: playerMoney,
          });
          console.log(response);
      } catch (error) {
            console.error("Error fetching setup data:", error);
        }
    };
    useEffect(() => {
        updatePlayerData(playerProfession);
    }, [playerProfession]);
    const handleProfession = (e) => {
        switch (e) {
            case "Banker":
                setPlayerMoney(2000);
                break;
            case "Carpenter":
                setPlayerMoney(1500);
                break;
            case "Farmer":
                setPlayerMoney(1000);
                break;
            default:
                setPlayerMoney(0);
                break;
        }
        setPlayerProfession(e);
    }

    return (
        <div className="global" style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",height: '1000px',backgroundSize:"cover",backgroundPosition:"center"}}>
            <p>Choose your Profession.</p>
            <p>You may:</p>
            <ol id="setupQuestions1">
                <li id="bankerMenuItem" onClick={() => handleProfession("Banker")}>Be a banker from Boston</li>
                <li id="carpenterMenuItem" onClick={() => handleProfession("Carpenter")}>Be a carpenter from Ohio</li>
                <li id="farmerMenuItem" onClick={() => handleProfession("Farmer")}>Be a farmer from Illinois</li>
                <li id="differencesMenuItem">Find out the differences between the choices</li>
            </ol>
            <div id="selectedOption">What is your choice?</div>
            <div>You Have Chosen {playerProfession} You have this Amount of Money {playerMoney}</div>

        </div>
    );
};

export default GameScreen1;