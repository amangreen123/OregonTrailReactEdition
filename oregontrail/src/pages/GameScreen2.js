import React, { useState } from 'react';
import axios from 'axios';

function GameScreen2() {
    const [playerName, setPlayerName] = useState('');

    const handleNameChange = (e) => {
        setPlayerName(e.target.value);
        console.log("Player Name:", e.target.value)
    };

    const updatePlayerName = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/setup/updatePlayer', {
                playerName: playerName,
            });
            setPlayerName(response.data.playerName);
        } catch (error) {
            console.error('Error updating player name:', error);
        }
    };

    return (
        <div>
            <p>What is the name of the leader?</p>
            <label>
                Leader Name:
                <input type="text" value={playerName} onChange={handleNameChange} name="playerName" />
            </label>
            <button className="button-1" id="page1sub" onClick={updatePlayerName}>
                Next</button>
        </div>
    );
}

export default GameScreen2;