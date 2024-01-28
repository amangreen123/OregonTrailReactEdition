import React, { useEffect, useState } from 'react';
import "../components/global.css";
import { useDispatch } from "react-redux";
import bg from "../images/gettyimages-3090888-2.jpg";

function GameScreen2() {
    const [leaderName, setLeaderName] = useState('');
    const dispatch = useDispatch();

    const handleNameChange = (event) => {
        setLeaderName(event.target.value);
    };

    const updatePlayerName = () => {
        dispatch({
            type: "updatePlayerName",
            payload: { playerName: leaderName },
        });
    }

    useEffect(() => {
        if (leaderName !== "") {
            updatePlayerName();
        }
    }, [leaderName, dispatch]);

    const buttonClick = () => {
        updatePlayerName();
        window.location.href = "/GameScreen3";
    }

    return (
        <div className="setup" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", height: "1000px", backgroundSize: "cover", backgroundPosition: "center" }}>
            <h1>What is the name of the leader?</h1>
            <label>
                Leader Name:
                <input onChange={(event) => handleNameChange(event)} type="text" value={leaderName} />
            </label>
            <button className="button-1" id="page1sub" onClick={buttonClick}>Next Page</button>
        </div>
    );
}

export default GameScreen2;