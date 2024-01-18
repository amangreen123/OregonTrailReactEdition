import React, { useState } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";

const GameScreen4 = () => {
    const [startMonth, setStartMonth] = useState("");
    const dispatch = useDispatch();

    const updateMonth = async (event) => {
        let month = event.target.id; // Use event.target.id to get the selected month
        try {
            const response = await axios.post('http://localhost:8000/api/setup/updatePlayer', {
                startMonth: month,
            });

            if (response && response.data) {
                setStartMonth(response.data.startMonth);
                dispatch({
                    type: "updateStartMonth",
                    payload: { startMonth: response.data.startMonth },
                });
                console.log("Start Month:", response.data.startMonth);
            } else {
                console.error("Error updating Month");
            }
        } catch (error) {
            console.error('Error updating Month', error);
        }
    }

    return (
        <div>
            <p>Which month would you like to leave</p>
            <ol id="setupQuestions2">
                <li id="march" onClick={updateMonth}>March</li>
                <li id="april" onClick={updateMonth}>April</li>
                <li id="mayItem" onClick={updateMonth}>May</li>
                <li id="juneItem" onClick={updateMonth}>June</li>
                <li id="julyItem" onClick={updateMonth}>July</li>
            </ol>
            <div id="selectedOption">What is your choice?</div>
        </div>
    );
};

export default GameScreen4;