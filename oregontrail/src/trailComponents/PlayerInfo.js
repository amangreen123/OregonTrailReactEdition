import React from "react";


export const PlayerInfo = ({gameState}) => (

    <div className="game-header">
        <h1>Oregon Trail</h1>
        <div className="trail">
            <p>Leader Name: {gameState.playerNames[0]}</p>
            <p>Player Names: {gameState.playerNames.slice(1).join(", ")}</p>
        </div>
        <p>Player Status: {gameState.playerStatus}</p>
        <p>Player Profession: {gameState.playerProfession}</p>
        <p>Player Money: {gameState.playerMoney}</p>
        <p>Start Month: {gameState.startMonth}</p>
        <p>Group Health: {gameState.groupHealth}</p>
        <p>Miles Traveled: {gameState.milesTraveled}</p>
        <p>Days On Trail: {gameState.daysOnTrail}</p>
        <p>Message: {gameState.message}</p>
    </div>
);