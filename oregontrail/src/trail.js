import React, { useState, useEffect } from "react";

import { useGameStates } from './trailComponents/TrailGameState'
import { PlayerInfo } from './trailComponents/PlayerInfo'
import { TrailStatus } from './trailComponents/TrailStatus'
import { TrailTerrain } from './trailComponents/TrailTerrain'

import "./trail.css";

import {useNavigate} from "react-router-dom";

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

function Trail() {

    const navigate = useNavigate();
    const {gameState, selectedPace, setSelectedPace, updateTrail, resetTrail} = useGameStates(initialState);


    const handlePaceClick = (pace) => {
       setSelectedPace(pace);
    };

    const handleQuit = () => {
        navigate('/mainmenu')
    }

    //console.log("Current terrain:", gameState.currentTerrain.name);
    //console.log("Current weather:", gameState.currentWeather.type);
    //console.log("Current terrain:", gameState.currentTerrain.imageUrl);

    //console.log("Current gameState:", gameState);


    return (
        <div className="trail" style={{
            backgroundImage: `url(${gameState})`,
            backgroundRepeat: "no-repeat",
            height: "1000px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            zIndex: -1
        }}>
            <div className="game-header">
                <PlayerInfo gameState={gameState}/>
                <TrailStatus gameState={gameState} pace={selectedPace}/>
            </div>

            <TrailTerrain
                terrain={gameState.terrain}
                weather={gameState.weather}
                image={gameState.image}
            />

            <div className="game-controls">
                <button className="game-control-button" onClick={updateTrail}>
                    Travel Trail
                </button>
                <button className="game-control-button" onClick={resetTrail}>
                    Reset Game
                </button>
                <button className="game-control-button" onClick={handleQuit}>
                    Quit Game
                </button>

                <div className="game-controls-pace">
                    <button className="game-control-button" onClick={() => handlePaceClick("Steady")}>
                        Steady
                    </button>
                    <button className="game-control-button" onClick={() => handlePaceClick("Strenuous")}>
                        Strenuous
                    </button>
                    <button className="game-control-button" onClick={() => handlePaceClick("Grueling")}>
                        Grueling
                    </button>
                    <button className="game-control-button" onClick={() => handlePaceClick("Resting")}>
                        Resting
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Trail;