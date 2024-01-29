import React from "react";
import "./trail.css"
import {useState, useEffect} from "react";
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


    const isPaceSelected = !!selectedPace;


    useEffect(() => {
        // Fetch initial player data from the backend when the component mounts
        const fetchPlayerData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/setup/player");
                const initialGameState = response.data;

                setGameState({
                    groupHealth: initialGameState.groupHealth,
                    milesTraveled: initialGameState.milesTraveled,
                    daysOnTrail: initialGameState.daysOnTrail,
                    message: initialGameState.message,
                    playerNames: initialGameState.playerNames,
                    playerStatus: initialGameState.playerStatus,
                    playerProfession: initialGameState.playerProfession,
                    playerMoney: initialGameState.playerMoney,
                    startMonth: initialGameState.startMonth,
                    pace: initialGameState.pace,
                    weatherConditions: initialGameState.currentWeather.type,
                    terrain: initialGameState.currentTerrain.name,
                    image: initialGameState.currentTerrain.imageUrl
                });
            } catch (error) {
                console.error("Error fetching player data:", error);
            }
        };

        fetchPlayerData();
    }, []);


    // Getting Json API route Update
    const updateGame = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/updateGame", {
                params: {
                ...gameState,
                    pace: selectedPace
                }
            });

            const updatedGameState = response.data;

            setGameState({
                groupHealth: updatedGameState.data.groupHealth,
                milesTraveled: updatedGameState.data.milesTraveled,
                daysOnTrail: updatedGameState.data.daysOnTrail,
                message: updatedGameState.data.message,
                playerNames: updatedGameState.data.playerNames,
                playerStatus: updatedGameState.data.playerStatus,
                playerProfession: updatedGameState.data.playerProfession,
                playerMoney: updatedGameState.data.playerMoney,
                startMonth: updatedGameState.data.startMonth,
                pace: updatedGameState.data.pace,
                weatherConditions: updatedGameState.data.currentWeather.type,
                terrain: updatedGameState.data.currentTerrain.name,
                image: updatedGameState.data.currentTerrain.imageUrl
            });
            setShowResetGame(false);
            console.log("PlayerStatus", updatedGameState.data.playerStatus);
            console.log("Weather", updatedGameState.data.currentWeather);
            console.log("Terrain:", updatedGameState.data.currentTerrain.imageUrl);
            console.log("Pace:", updatedGameState.data.pace);
        } catch (error) {
            console.error("Error fetching game data:", error);
        }
    };

    const handlePaceClick = () => {
        if(isPaceSelected) {
            updateGame();
        }else {
            alert("Please select a pace");
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
        <div className={"trail"} style={{
            backgroundImage: `url(${gameState.image})`,
            backgroundRepeat: "no-repeat",
            height: "1000px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            zIndex: -1
        }}>
            <h1>Oregon Trail</h1>
            <p>Leader Name: {gameState.playerNames[0]}</p>
            <p>Group Members: {gameState.playerNames[1]}, {gameState.playerNames[2]}, {gameState.playerNames[3]} , {gameState.playerNames[4]}</p>
            <p>Player Status: {gameState.playerStatus}</p>
            <p>Player Profession: {gameState.playerProfession}</p>
            <p>Player Money: {gameState.playerMoney}</p>
            <p>Start Month: {gameState.startMonth}</p>
            <p>Pace: {gameState.pace} </p>
            <p>Group Health: {gameState.groupHealth}</p>
            <p>Miles Traveled: {gameState.milesTraveled}</p>
            <p>Days On Trail: {gameState.daysOnTrail}</p>
            <p>Message: {gameState.message}</p>
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
            {showResetGame && <div className="reset-game">
                <p>Game Reset</p>
            </div>}
        </div>
    );

}


export default Trail