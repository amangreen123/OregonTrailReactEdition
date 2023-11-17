import React, { useState } from 'react';
import axios from "axios";

const GameScreen3 = () => {
    const [groupNames, setGroupNames] = useState({
        player1: "",
        player2: "",
        player3: "",
        player4: "",
    });

    const updateGroupName = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/setup/updatePlayer', {
                playerNames: groupNames,
            });
            setGroupNames(response.data.playerNames);
            console.log("Player Names :", response.data.playerNames)
            console.log(response.status)
        } catch (error) {
            console.error('Error updating player name:', error);
        }
    };

    const handleGroupNameChange = (e) => {
        const {name, value} = e.target;
        console.log("name:", name);
        console.log("value:", value);
        setGroupNames((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        })
    }
    return (
        <div>
            <p>What are the names of the Wagon Party</p>
            Player Name: <input name="player1" type="text" onChange={handleGroupNameChange}/><br/>
            Player Name: <input name="player2" type="text" onChange={handleGroupNameChange}/><br/>
            Player Name: <input name="player3" type="text" onChange={handleGroupNameChange}/><br/>
            Player Name: <input name="player4"/><br/>
            <input type="button" class="button-1" id="page2sub" value="Next" onClick={updateGroupName}/>
        </div>
    );
};


export default GameScreen3;