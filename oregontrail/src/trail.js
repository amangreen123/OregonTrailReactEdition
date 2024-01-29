import React, { useState, useEffect } from "react";
import axios from "axios";
import "./trail.css";

function Trail() {
    const initialState = {
        groupHealth: 100,
        milesTraveled: 0,
        daysOnTrail: 0,
        message: "",
        playerNames: [],
        playerStatus: "",
        playerProfession: "",
        playerMoney: 0,
        startMonth: "",
        pace: "",
        weatherConditions: "",
        terrain: "",
        image: "",
    };

    const [gameState, setGameState] = useState({ ...initialState });
    const [showResetGame, setShowResetGame] = useState(false);
    const [selectedPace, setSelectedPace] = useState("");

    const isPaceSelected = !!selectedPace;

    useEffect(() => {
        fetchPlayerData();
    }, []);

    const fetchPlayerData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/setup/player");
            const initialGameState = response.data;

            setGameState({
                groupHealth: initialGameState.groupHealth,
                milesTraveled: initialGameState.milesTraveled,  // Ensure correct assignment here
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
                image: initialGameState.currentTerrain.imageUrl,
            });
        } catch (error) {
            console.error("Error fetching player data:", error);
        }
    };

    const updateGame = async () => {
        if (!isPaceSelected) {
            alert("Please select a pace");
            return;
        }

        try {
            const response = await axios.get("http://localhost:8000/api/updateGame", {
                params: {
                    ...gameState,
                    pace: selectedPace,
                },
            });

            const updatedGameState = response.data;

            setGameState((prevState) => ({
                ...prevState,
                groupHealth: updatedGameState.groupHealth,
                milesTraveled: updatedGameState.milesTraveled,
                daysOnTrail: updatedGameState.daysOnTrail,
                message: updatedGameState.message,
                weatherConditions: updatedGameState.currentWeather.type,
                terrain: updatedGameState.currentTerrain.name,
                image: updatedGameState.currentTerrain.imageUrl,
                pace: updatedGameState.pace,
                startMonth: prevState.startMonth,
                playerProfession: prevState.playerProfession,
                playerMoney: prevState.playerMoney,
                playerStatus: updatedGameState.playerStatus,
            }));

            setShowResetGame(false);

            console.log("Updated Game State:", updatedGameState);
            console.log("Game State:", gameState);
            console.log("pace:", selectedPace);

        } catch (error) {
            console.error("Error updating game:", error);
        }
    };


    const handlePaceClick = () => {
        if (isPaceSelected) {
            updateGame();
        } else {
            alert("Please select a pace");
        }
    };

    const handleQuit = () => {
        window.location.href = "http://localhost:3000/";
    }

    const getPace = async (newPace) => {
        setSelectedPace(newPace);
        try {
            const response = await axios.get("http://localhost:8000/api/getAllPaces", {
                params: {
                    pace: newPace,
                },
            });

            console.log("Pace Data:", response.data);
        } catch (error) {
            console.error("Error fetching Pace data:", error);
        }
    };

    const resetGame = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/resetGame", {
                params: {
                    ...initialState,
                },
            });

            //How to reset the game state to the initial state
            setGameState({
                groupHealth: 100,
                milesTraveled: 0,
                daysOnTrail: 0,
                message: "",
                playerNames: [],
                playerStatus: "",
                playerProfession: "",
                playerMoney: 0,
                startMonth: "",
                pace: "",
                weatherConditions: "",
                terrain: "",
                image: "",
            });

            setShowResetGame(true);
            window.location.href = "http://localhost:3000/";

            console.log("Reset Game State:", response.data);
        } catch (error) {
            console.error("Error resetting game:", error);
        }
    };

    return (
        <div className="trail" style={{backgroundImage: `url(${gameState.image})`, backgroundRepeat: "no-repeat", height: "1000px", backgroundSize: "cover", backgroundPosition: "center", position: "relative", zIndex: -1}}>
            <div className="game-header">
            <h1>Oregon Trail</h1>
            {gameState.playerNames?.length >= 5 && (
                <div>
                    <p >Leader Name: {gameState.playerNames[0]}</p>
                    <p>Player Names: {gameState.playerNames.slice(1).join(", ")}</p>
                </div>
            )}
            <p>Player Status: {gameState.playerStatus}</p>
            <p>Player Profession: {gameState.playerProfession}</p>
            <p>Player Money: {gameState.playerMoney}</p>
            <p>Start Month: {gameState.startMonth}</p>
            <p>Pace: {isPaceSelected ? selectedPace : "Select a pace"} </p>
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
                <button className="game-control-button" onClick={handlePaceClick}>
                    Travel Trail
                </button>
                <button className="game-control-button" onClick={resetGame}>
                    Reset Game
                </button>
                <button className="game-control-button" onClick={handleQuit}>
                    Quit Game
                </button>
                <div className="game-controls-pace">
                    <button className="game-control-button" onClick={() => getPace("Steady")}>
                        Steady
                    </button>
                    <button className="game-control-button" onClick={() => getPace("Strenuous")}>
                        Strenuous
                    </button>
                    <button className="game-control-button" onClick={() => getPace("Grueling")}>
                        Grueling
                    </button>
                    <button className="game-control-button" onClick={() => getPace("Resting")}>
                        Resting
                    </button>
                </div>
            </div>
            {showResetGame && (
                <div className="reset-game">
                    <p>Game Reset</p>
                </div>
            )}
        </div>
    );
}

export default Trail;