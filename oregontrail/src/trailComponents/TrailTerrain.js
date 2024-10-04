import React from "react";

export const TrailTerrain = ({terrain,weather,message}) => (

    <div className="game-header">
        <p>Terrain: {terrain}</p>
        <p>Weather: {weather}</p>
        <p>Message: {message}</p>
    </div>
);