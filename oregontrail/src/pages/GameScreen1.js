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
    //update the playerProfession state variable
    //update the playerMoney state variable
    //update the playerProfession state variable in the redux store
    //update the playerMoney state variable in the redux store

    //can you write a function that will do the axios and the dispatch to display the info on gamescreen 5?
    //how to use axios post with redux to display the info on gamescreen 5?

    const updatePlayerData = async () => {
        try {
          const response = await axios.post("http://localhost:8000/api/setup/updatePlayer", {
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
            updatePlayerData();
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
        // dispatch({
        //     type: "updatePlayerData",
        //     payload: { playerProfession: e},
        // });
        setPlayerProfession(e);
        //dispatch({type: "updatePlayerData", payload: {playerProfession: playerProfession, playerMoney: playerMoney}})
    }

    //make a button appear when the user clicks on one of the options
    //when the user clicks on the button, the button will take them to the next screen
    //the button will also update the playerProfession state variable
    //the button will also update the playerMoney state variable

    const playerSubmit = () => {
        //navigate to the next screen
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