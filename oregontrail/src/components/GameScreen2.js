import React from 'react';
import axios from "axios";
import {useState, useEffect} from "react";
function GameScreen2() {

    const [playerName, setPlayerName] = useState("");

    const updatePlayerName = async () => {
        try {
            const response = await axios.post("http://localhost:8000/api/setup/updatePlayer", {
                playerName: playerName,
                headers:{
                    'Content-Type': 'application/json',
                }
            });
            console.log(response);
            setPlayerName(response.data.playerName)
        } catch (error) {
            console.error("Error fetching Name data:", error);
        }
    };

    useEffect(() => {
        updatePlayerName(playerName);
    }, [playerName]);

    const handleName = (e) => {
        setPlayerName(e.target.value);
    }

    return (
        <div>
            <p>What is the name of the leader?</p>
            <label>
                Leader Name:
                <input type="text" value={playerName} onChange={handleName}/>
            </label>
            <button className="button-1" id="page1sub">Next</button>
        </div>
    );
}
export default GameScreen2;