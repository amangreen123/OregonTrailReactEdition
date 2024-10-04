import React from "react";

export const TrailStatus = ({gameState,pace}) => (
    <div className="game-header">
        <p>Pace: {pace || "Select a pace"}</p>
        <p>Group Health: {gameState.groupHealth}</p>
        <p>Miles Traveled: {gameState.milesTraveled}</p>
        <p>Days On Trail: {gameState.daysOnTrail}</p>
    </div>
);