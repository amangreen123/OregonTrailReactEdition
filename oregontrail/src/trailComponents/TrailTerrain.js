import React from "react";

export const TrailTerrain = ({terrain, weather, image}) => {
    // console.log("TrailTerrain props:", {
    //     terrain,
    //     weather,
    //     message,
    //     image
    // });
    return (
        <div className="game-map">
            <img src={image} alt={terrain} className="terrain-image"/>
                <p>Terrain: {terrain}</p>
                <p>Weather: {weather}</p>
        </div>
    );
};