import React, { useState } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import bg from "../images/gettyimages-3090888-2.jpg";

const GameScreen4 = () => {
    const [startMonth, setStartMonth] = useState("");
    const dispatch = useDispatch();

    const updateMonth = async (event) => {
        let month = event.target.id; // Use event.target.id to get the selected month
        try {
            const response = await axios.put('http://localhost:8000/api/setup/createPlayer', {
                startMonth: month,
            });

            console.log("Response:", response);
            console.log("Response Data:", response.data);
            console.log("Response Data Start Month:", response.data.startMonth);

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

    const buttonClick = () => {
        if (startMonth === "") {
            alert("Please select a month")
            return;
        }
        updateMonth()
        window.location.href = "/GameScreen5"
    }

    return (
        <div className="setup" style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", height: "1000px", backgroundSize: "cover", backgroundPosition: "center",}}>
            <p>Which month would you like to leave</p>
            <ol id="setupQuestions2">
                <li id="March" onClick={updateMonth}>March</li>
                <li id="April" onClick={updateMonth}>April</li>
                <li id="May" onClick={updateMonth}>May</li>
                <li id="June" onClick={updateMonth}>June</li>
                <li id="July" onClick={updateMonth}>July</li>
            </ol>
            <button className="button-1" id="page1sub" onClick={buttonClick} >Next Page</button>

        </div>
    );
};

export default GameScreen4;