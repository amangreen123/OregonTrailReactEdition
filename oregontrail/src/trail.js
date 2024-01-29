import React from "react";
import "./trail.css"
import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";


//this the trail page of the app
//it is the page that is rendered when the player starts the game
//it displays the game map and the game controls
//the game map is a picture of the Oregon Trail
//the game controls are buttons that the player can click to play the game

function Trail() {
    const initialState = {
        groupHealth: 100,
        milesTraveled: 0,
        daysOnTrail: 0,
        message: "",
        playerNames: "",
        playerStatus: "",
        playerProfession: "",
        playerMoney: 0,
        startMonth: "",
        pace: "",
        weatherConditions: "",
        terrain: "",
        image: ""
    };

    const [gameState, setGameState] = useState({ ...initialState });
    const [restartGameState, setRestartGameState] = useState({ ...initialState });
    const [showResetGame, setShowResetGame] = useState(false);
    const [currpace, setcurrPace] = useState("");
    const [selectedPace, setSelectedPace] = useState("");

    const playerProfession = useSelector((state) =>  state.playerProfession);
    const playerName = useSelector((state) => state.playerName);
    const groupNames = useSelector((state) => state.groupNames);
    const startMonth = useSelector((state) => state.startMonth);
    const playerMoney = useSelector((state) => state.playerMoney);

    const isPaceSelected = !!selectedPace;

    // Getting Json API route Update
    const updateGame = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/updateGame", {
                params: {
                ...gameState,
                    pace: selectedPace
                }
            });

            setGameState({
                groupHealth: response.data.groupHealth,
                milesTraveled: response.data.milesTraveled,
                daysOnTrail: response.data.daysOnTrail,
                message: response.data.message,
                playerNames: response.data.playerNames,
                playerStatus: response.data.playerStatus,
                playerProfession: response.data.playerProfession,
                playerMoney: response.data.playerMoney,
                startMonth: response.data.startMonth,
                pace: response.data.pace,
                weatherConditions: response.data.currentWeather.type,
                terrain: response.data.currentTerrain.name,
                image: response.data.currentTerrain.imageUrl
            });
            setShowResetGame(false);
            console.log("Response", response);
            console.log("Weather", response.data.currentWeather);
            console.log("Terrain:", response.data.currentTerrain.imageUrl);
            console.log("Pace:", response.data.pace);
        } catch (error) {
            console.error("Error fetching game data:", error);
        }
    };

    const handlePaceClick = () => {
        if(isPaceSelected) {
            updateGame();
        }else {
            console.log("Please select a pace");
        }
    }

   const getPace = async (newPace) => {
       setSelectedPace(newPace);
        try {
            const response = await axios.get("http://localhost:8000/api/getAllPaces", {
                params: {
                    pace: newPace
                }
            });

            setcurrPace({
                name: response.data.name,
                miles: response.data.miles,
                healthChange: response.data.healthChange
            });


            if (currpace.name === "Steady") {
                console.log("Steady");
            }
            else if (currpace.name === "Strenuous") {
                console.log("Strenuous");
            }
            else if (currpace.name === "Grueling") {
                console.log("Grueling");
            }
            else if (currpace.name === "Resting") {
                console.log("Resting");
            }

            console.log("Response", response);
            console.log("Status", response.status);
            console.log("Data", response.data);
        } catch (error) {
            console.error("Error fetching Pace data:", error);
    }

   }



    const resetGame = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/resetGame", {
                params: {
                    ...restartGameState
                }
            });

            setRestartGameState({
                groupHealth: response.data.groupHealth,
                milesTraveled: response.data.milesTraveled,
                daysOnTrail: response.data.daysOnTrail,
                message: response.data.message,
                playerNames: response.data.playerNames,
                playerStatus: response.data.playerStatus,
                playerProfession: response.data.playerProfession,
                playerMoney: response.data.playerMoney,
                startMonth: response.data.startMonth,
                pace: response.data.pace,
                weatherConditions: response.data.currentWeather.type,
                terrain: response.data.currentTerrain.name,
                image: response.data.currentTerrain.imageUrl
            });
            console.log("Response", response);
            console.log("Status", response.status);
            console.log("Data", response.data);
            setShowResetGame(true);
        } catch (error) {
            console.error("Error fetching Reset data:", error);
        }
    };

    return (
        <div className={"trail"} style={{backgroundImage: `url(${gameState.image})`, backgroundRepeat: "no-repeat", height: "1000px", backgroundSize: "cover", backgroundPosition: "center", position: "relative", zIndex: -1}}>
            <h1>Oregon Trail</h1>
            <div className="player-info">
                <p>Leader Name: {playerName}</p>
                <p>Group Names: {groupNames}</p>
                <p>Player Status: {gameState.playerStatus}</p>
                <p>Player Profession: {playerProfession}</p>
                <p>Player Money: {playerMoney}</p>
                <p>Start Month: {startMonth}</p>
                <p>Pace:{selectedPace} </p>
                <p>Group Health: {gameState.groupHealth}</p>
                <p>Miles Traveled: {gameState.milesTraveled}</p>
                <p>Days On Trail: {gameState.daysOnTrail}</p>
                <p>Message: {gameState.message}</p>
            </div>
            <div className="game-map">
                <p>{gameState.terrain}</p>
                <p>&nbsp;&nbsp;</p>
                <p>{gameState.weatherConditions}</p>
            </div>
            <div className="game-controls">

                <button className="game-control-button" onClick={handlePaceClick}>Travel Trail</button>
                <button className="game-control-button" onClick={() => getPace("Steady")}>Steady</button>
                <button className="game-control-button" onClick={() => getPace("Strenuous")}>Strenuous</button>
                <button className="game-control-button" onClick={() => getPace("Grueling")}>Grueling</button>
                <button className="game-control-button" onClick={() => getPace("Resting")}>Resting</button>
                <button className="game-control-button" onClick={event => window.location.href = "/mainmenu"}>Quit
                    Game
                </button>
                <button className="game-control-button" onClick={() => resetGame()}>Reset Game</button>
            </div>

            {/* Section to display reset game data */}
            {/*How to make section appear after button click */}
            {showResetGame && (<div className="reset-game-section">
                <div className="reset-game-info">
                    <p>Player Names: {restartGameState.playerNames}</p>
                    <p>Player Status: {restartGameState.playerStatus[0]}</p>
                    <p>Player Profession: {restartGameState.playerProfession}</p>
                    <p>Player Money: {restartGameState.playerMoney}</p>
                    <p>Start Month: {restartGameState.startMonth}</p>
                    <p>Group Health: {restartGameState.groupHealth}</p>
                    <p>Miles Traveled: {restartGameState.milesTraveled}</p>
                    <p>Days On Trail: {restartGameState.daysOnTrail}</p>
                    <p>Message: {restartGameState.message}</p>
                </div>
            </div>
            )}
        </div>
    );

}


export default Trail