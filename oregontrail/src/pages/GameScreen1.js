import React from 'react';
import "../components/global.css";
import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";


const GameScreen1 = () => {

    const [playerProfession, setPlayerProfession] = useState("");
    const [playerMoney, setPlayerMoney] = useState(0);
    const dispatch = useDispatch();

    console.log("Redux State:", useSelector((state) => state));

    const updatePlayerData = async () => {
        dispatch({
            type: "updatePlayerData",
            payload: {playerProfession: playerProfession, playerMoney: playerMoney},
        });
    }

    useEffect(() => {
        if(playerProfession !== "" && playerMoney !== 0) {
            updatePlayerData();
        }
    }, [playerProfession, playerMoney, dispatch]);

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
        if (playerProfession === "") {
            alert("Please select a profession")
            return;
        }
        updatePlayerData();
    }

    const differencesMenuItem = () => {
        alert("Banker: Starts with $2000, Carpenter: Starts with $1500, Farmer: Starts with $1000")
        return;

    }

    return (
        <div >
            <p>Choose your Profession.</p>
            <p>You may:</p>
            <ol id="setupQuestions1">
                <li id="bankerMenuItem" onClick={() => handleProfession("Banker")} onChange={playerSubmit}>Be a banker from Boston </li>
                <li id="carpenterMenuItem" onClick={() => handleProfession("Carpenter")} onChange={playerSubmit}>Be a carpenter from Ohio</li>
                <li id="farmerMenuItem" onClick={() => handleProfession("Farmer")} onChange={playerSubmit}>Be a farmer from Illinois</li>
                <li id="differencesMenuItem" onClick={() => differencesMenuItem()}>Find out the differences between the choices</li>
            </ol>
            <div>You Have Chosen {playerProfession} You have this Amount of Money {playerMoney}</div>
            <button onClick={event => window.location.href="/GameScreen2"}> Next Page </button>
        </div>
    );
};

export default GameScreen1;