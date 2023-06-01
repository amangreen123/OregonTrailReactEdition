import React from "react";
import "./trail.css"
import Navigation from "./components/Navigation";
function Trail (){

    return(
        <div className={"trail"}>
            <h1>Oregon Trail</h1>
            <div className="player-info">
                <p>Player Name: John Smith</p>
                <p>Occupation: Banker</p>
                <p>Starting City: Independence, MO</p>
                <p>Starting Date: March 1, 1848</p>
            </div>
            <div className="game-map">
                <p>Map goes here</p>
            </div>
            <div className="game-controls">
                <button className="game-control-button">Travel Trail</button>
                <button className="game-control-button">Check Supplies</button>
                <button className="game-control-button">Change Pace</button>
                <button className="game-control-button">Change Rations</button>
                <button className="game-control-button">Stop to Rest</button>
                <button className="game-control-button">Attempt to Trade</button>
                <button className="game-control-button">Hunt for Food</button>
                <button className="game-control-button">Quit Game</button>
                <Navigation></Navigation>
            </div>
        </div>
    )

}


export default Trail