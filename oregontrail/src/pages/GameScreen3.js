import React, { useState } from 'react';
import axios from "axios";

const GameScreen3 = () => {

    const [groupNames, setGroupNames] = useState(["", "", "", ""]);

    const handleGroupNameChange = (text) => {
        setGroupNames(text.target.value);
        //console.log("Leader Name:", text)
    }

    const updateGroupName  = async () => {
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
    }

    return (
        <div>
            <p>What are the names of the Wagon Party</p>
            Player Name: <input id="player1" onChange={(text)=>{
            handleGroupNameChange(text);
            }}type="text" value={groupNames}/><br />
            Player Name: <input id="player2" onChange={(text)=>{
            handleGroupNameChange(text);
            }}type="text" value={groupNames}/><br />
            Player Name: <input id="player3" /><br />
            Player Name: <input id="player4" /><br />
            <input type="button" class="button-1" id="page2sub" value="Next" onClick={updateGroupName}/>
        </div>
    );

};

export default GameScreen3;