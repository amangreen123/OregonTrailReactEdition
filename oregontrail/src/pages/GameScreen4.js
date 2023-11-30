import React, { useState } from 'react';
import axios from "axios";

const GameScreen4 = () => {
    const [startMonth, setStartMonth] = useState("");


    const updateMonth = (event) => {

        let month = event.target.textContent;
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
                <li id="march" onClick={updateMonth}>March</li>
                <li id="april" onClick={updateMonth}>April</li>
                <li id="mayItem"onClick={updateMonth}>May</li>
                <li id="juneItem"onClick={updateMonth}>June</li>
                <li id="julyItem"onClick={updateMonth}>July</li>
            </ol>
            <div id="selectedOption">What is your choice?</div>
        </div>
    );
};

export default GameScreen4;