import React, { useState } from 'react';
import "../components/global.css";
import {useDispatch} from "react-redux";
import axios from 'axios';
import bg from "../images/gettyimages-3090888-2.jpg";

function GameScreen2() {
    const [leaderName, setleaderName] = useState('');
    const dispatch = useDispatch();

    const handleNameChange = (event) => {

        setleaderName(event.target.value);
        //console.log("Leader Name:", text)
    };

    const updatePlayerName = async () => {
        try {
            const response = await axios.put('http://localhost:8000/api/setup/createPlayer', {
                    playerName: [leaderName],
            });

            const updateName = response.data.playerName;
                setleaderName(updateName);

                dispatch({
                    type: "updatePlayerName",
                    payload: { playerName: leaderName},
                });

                console.log("Player Name :", response.data.playerName)
                console.log("Status Code:", response.status)

        } catch (error) {

            if(error.response.status === 400){
                return Promise.reject(error);
            }
            console.error('Error updating player name:', error);
        }


    };

    const buttonClick = (e) => {
        updatePlayerName();
        //e.preventDefault();
        window.location.href = "/GameScreen3"
    }

    return (
        <div className="setup" style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", height: "1000px", backgroundSize: "cover", backgroundPosition: "center",}}>
            <h1>What is the name of the leader?</h1>
            <label>
                Leader Name:
                <input onChange={(event)=>{
                    handleNameChange(event);
                }} type="text" value={leaderName}/>
            </label>
            <button className="button-1" id="page1sub" onClick={buttonClick} >Next Page</button>

        </div>
    );
}

export default GameScreen2;