import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import axios from 'axios';

function GameScreen2() {
    const [leaderName, setleaderName] = useState('');
    const dispatch = useDispatch();

    const handleNameChange = (event) => {
        setleaderName(event.target.value);
        //console.log("Leader Name:", text)
    };

    const updatePlayerName = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/setup/updatePlayer', {
                    playerNames: leaderName
            });

                setleaderName(response.data.playerNames);
                dispatch({
                    type: "updatePlayerName",
                    payload: { playerName: leaderName},
                });

                console.log("Player Name :", response.data.playerName)
                console.log("Status Code:", response.status)
        } catch (error) {
            console.error('Error updating player name:', error);
        }
    };

    return (
        <div>
            <p>What is the name of the leader?</p>
            <label>
                Leader Name:
                <input onChange={(event)=>{
                    handleNameChange(event);
                }} type="text" value={leaderName}/>
            </label>
            <button className="button-1" id="page1sub" onClick={updatePlayerName}>Next</button>
        </div>
    );
}

export default GameScreen2;