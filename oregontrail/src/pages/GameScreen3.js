import React, { useState } from 'react';
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";

const GameScreen3 = () => {

    const [groupNames, setGroupNames] = useState({
        player1: "",
        player2: "",
        player3: "",
        player4: "",
    });

    const dispatch = useDispatch();
    console.log("Redux", useSelector((state) => state));
    const updateGroupName = async () => {

        try {
            const response = await axios.post('http://localhost:8000/api/setup/updatePlayer', {
                playerNames: [groupNames.player1, groupNames.player2, groupNames.player3, groupNames.player4],
            });

            const updatedPlayerNames = response.data.playerNames;

            setGroupNames((prev) => ({
                ...prev,
                player1: updatedPlayerNames[0],
                player2: updatedPlayerNames[1],
                player3: updatedPlayerNames[2],
                player4: updatedPlayerNames[3],
            }));

            dispatch ({
                type: "updateGroupNames",
                payload: {playerNames: [groupNames.player1, groupNames.player2, groupNames.player3, groupNames.player4]},
            });

            console.log("Player Names :", response.data.playerNames)
            console.log("Repsonse :", response.data)
            console.log("Group Names :", groupNames.player1)
            console.log("Response :", response)
            console.log(response.status)

        } catch (error) {
            console.error('Error updating player name:', error);
        }
    };

    const handleGroupNameChange = (e) => {
        // Destructure the 'name' and 'value' properties from the event target
        const {name, value} = e.target;
        // Update the state using the previous state
        setGroupNames((prev) => {
            return {
                ...prev, // Spread the previous state to keep existing values
                [name]: value, // Update the specific property with the new value
            };
        })
        console.log("name:", name);
        console.log("value:", value);
    }

    const buttonClick = () => {
        updateGroupName();
        window.location.href = "/GameScreen4"
    }

    return (
        <div>
            <p>What are the names of the Wagon Party</p>
            Player Name: <input name="player1" type="text" onChange={handleGroupNameChange}/><br/>
            Player Name: <input name="player2" type="text" onChange={handleGroupNameChange}/><br/>
            Player Name: <input name="player3" type="text" onChange={handleGroupNameChange}/><br/>
            Player Name: <input name="player4" type="text" onChange={handleGroupNameChange}/><br/>
            <input type="button" class="button-1" id="page2sub" value="Next" onClick={buttonClick}/>
        </div>
    );
};


export default GameScreen3;