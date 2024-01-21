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

    const playerProfession = useSelector((state) =>  state.playerProfession);
    const playerName = useSelector((state) => state.playerName);
    const groupNames = useSelector((state) => state.groupNames);
    const startMonth = useSelector((state) => state.startMonth);

    // Getting Json API route Update
    const updateGame = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/updateGame", {
                params: {
                ...gameState
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
        } catch (error) {
            console.error("Error fetching game data:", error);
        }
    };

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
                <p>Leader Name: {gameState.playerNames[0]}</p>
                <p>Group Names: {groupNames}</p>
                <p>Player Status: {gameState.playerStatus[0]}</p>
                <p>Player Profession: {playerProfession}</p>
                <p>Player Money: {gameState.playerMoney}</p>
                <p>Start Month: {startMonth}</p>
                <p>Group Health: {gameState.groupHealth}</p>
                <p>Miles Traveled: {gameState.milesTraveled}</p>
                <p>Days On Trail: {gameState.daysOnTrail}</p>
                <p>Message: {gameState.message}</p>
            </div>
            <div className="game-map">
                <p>{gameState.terrain}</p>
                <p>&nbsp;&nbsp;</p>
                <p>{gameState.weatherConditions}</p>
                <p>{gameState.pace}</p>
            </div>
            <div className="game-controls">
                <button className="game-control-button" onClick={updateGame}>Travel Trail</button>
                <button className="game-control-button">Stop to Rest</button>
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