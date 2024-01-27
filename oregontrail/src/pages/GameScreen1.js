import React from 'react';
import "../components/global.css";
import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import Navigation from "../components/Navigation";

const GameScreen1 = () => {

    const [playerProfession, setPlayerProfession] = useState("");
    const [playerMoney, setPlayerMoney] = useState(0);
    const dispatch = useDispatch();

    console.log("Redux State:", useSelector((state) => state));

    const updatePlayerData = async () => {
        try {
          const response = await axios.put("http://localhost:8000/api/setup/createPlayer", {
              playerProfession: playerProfession,
              playerMoney: playerMoney,
          });
            console.log("Player Profession:", response.data.playerProfession);
            console.log("Player Money:", response.data.playerMoney);
            console.log("StatusCode:",response.status);
            console.log("Response:", response.data);

            dispatch({
                type: "updatePlayerData",
                payload: { playerProfession: response.data.playerProfession, playerMoney: response.data.playerMoney },
            });

        } catch (error) {
            console.error("Error fetching setup data:", error);
        }
    };
    useEffect(() => {
        if(playerProfession !== "" && playerMoney !== 0){
            updatePlayerData().then(r => console.log("Updated Player Data"));
        }
    }, [playerProfession, playerMoney]);

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

    const playerSubmit = () => {
        console.log(playerProfession);
        console.log(playerMoney);
    }

    return (
        <div>
            <p>Choose your Profession.</p>
            <p>You may:</p>
            <ol id="setupQuestions1">
                <li id="bankerMenuItem" onClick={() => handleProfession("Banker")} onChange={playerSubmit}>Be a banker from Boston </li>
                <li id="carpenterMenuItem" onClick={() => handleProfession("Carpenter")} onChange={playerSubmit}>Be a carpenter from Ohio</li>
                <li id="farmerMenuItem" onClick={() => handleProfession("Farmer")} onChange={playerSubmit}>Be a farmer from Illinois</li>
                <li id="differencesMenuItem">Find out the differences between the choices</li>
            </ol>
            <div>You Have Chosen {playerProfession} You have this Amount of Money {playerMoney}</div>
            <button onClick={event => window.location.href="/GameScreen2"}> Next Page </button>
            <Navigation />
        </div>
    );
};

export default GameScreen1;