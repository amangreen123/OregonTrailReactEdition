import React, { useState } from 'react';
import axios from "axios";

const GameScreen4 = () => {
    const [startMonth, setStartMonth] = useState("");


    const updateMonth = (event) => {
        let month = event.target.id;
        console.log(month);
        try {
            const response = axios.post('http://localhost:8000/api/setup/updatePlayer', {
                startMonth: month
            });
            setStartMonth(response.data.startMonth);
            console.log(response);
        } catch (error) {
            console.error('Error updating player names:', error);
        }
    }



    return (
        <div>
            <p>Which month would like to leave</p>
            <ol id="setupQuestions2">
                <li id="marchItem" onClick={updateMonth}>March</li>
                <li id="aprilItem">April</li>
                <li id="mayItem">May</li>
                <li id="juneItem">June</li>
                <li id="julyItem">July</li>
            </ol>
            <div id="selectedOption">What is your choice?</div>
        </div>
    );
};

export default GameScreen4;