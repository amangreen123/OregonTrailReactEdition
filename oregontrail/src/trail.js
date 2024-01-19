import React from "react";
import "./trail.css"
import {useState, useEffect} from "react";
import axios from "axios";
import Navigation from "./components/Navigation";
import bg from "./images/gettyimages-3090888-2.jpg";
import {useHref} from "react-router-dom";
import mainmenuPage from "./mainmenuPage";

//this the trail page of the app
//it is the page that is rendered when the player starts the game
//it displays the game map and the game controls
//the game map is a picture of the Oregon Trail
//the game controls are buttons that the player can click to play the game
function Trail () {

    const [groupHealth, setGroupHealth] = useState(100);
    const [milesTraveled, setMilesTraveled] = useState(0);
    const [daysOnTrail, setDaysOnTrail] = useState(0);
    const [message, setMessage] = useState("");
    const [playerNames, setPlayerNames] = useState("");
    const [playerStatus, setPlayerStatus] = useState("");
    const [playerProfession, setPlayerProfession] = useState("");
    const [playerMoney, setPlayerMoney] = useState(0);
    const [startMonth, setStartMonth] = useState("");
    const [pace, setPace] = useState("");
    const [weatherConditions, setWeatherConditions] = useState("");
    const [terrain, setTerrain] = useState("");
    const [image, setImage] = useState("")

    const [restartgroupHealth,setRestartGroupHealth] = useState(100);
    const [restartmilesTraveled, setRestartMilesTraveled] = useState(0);
    const [restartdaysOnTrail, setRestartDaysOnTrail] = useState(0);
    const [restartmessage, setRestartMessage] = useState("");
    const [restartplayerNames, setRestartPlayerNames] = useState("");
    const [restartplayerStatus, setRestartPlayerStatus] = useState("");
    const [restartplayerProfession, setRestartPlayerProfession] = useState("");
    const [restartplayerMoney, setRestartPlayerMoney] = useState(0);
    const [restartstartMonth, setRestartStartMonth] = useState("");

    //getting Json API route Update
    const updateGame = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/updateGame", {
                groupHealth: groupHealth,
                milesTraveled: milesTraveled,
                daysOnTrail: daysOnTrail,
                message: message,
                playerNames: playerNames,
                playerStatus: playerStatus,
                playerProfession: playerProfession,
                playerMoney: playerMoney,
                startMonth: startMonth,
                pace: pace,
                weather: weatherConditions,
                currentTerrain: terrain,
            });

            setGroupHealth(response.data.groupHealth);
            setMilesTraveled(response.data.milesTraveled);
            setDaysOnTrail(response.data.daysOnTrail);
            setMessage(response.data.message);
            setPlayerNames(response.data.playerNames);
            setPlayerStatus(response.data.playerStatus);
            setPlayerProfession(response.data.playerProfession);
            setPlayerMoney(response.data.playerMoney);
            setStartMonth(response.data.startMonth);
            setPace(response.data.pace);
            setWeatherConditions(response.data.currentWeather.type);
            setTerrain(response.data.currentTerrain.name);
            setImage(response.data.currentTerrain.imageUrl);

            //Buffer.from(response.data.currentTerrain.imageUrl, 'base64').toString('ascii');
            // console.log("Group Health:", response.data.groupHealth);
            // console.log("Miles Traveled:", response.data.milesTraveled);
            // console.log("Days On Trail:", response.data.daysOnTrail);
            // console.log("Message:", response.data.message);
            // console.log("Player Names:", response.data.playerNames);
            // console.log("Player Status:", response.data.playerStatus);
            // console.log("Player Profession:", response.data.playerProfession);
            // console.log("Player Money:", response.data.playerMoney);
            // console.log("Start Month:", response.data.startMonth);
            // console.log("StatusCode:",response.status);
            console.log("Weather", response.data.weather);
            console.log("Terrain:", response.data.currentTerrain.imageUrl);
            // console.log("Response:", response.data);

        } catch (error) {
            console.error("Error fetching game data:", error);
        }
    };
    //<img hidden src="#" onError= "SHow error"> </img>

    useEffect(() => {
        updateGame();
    }, []);

    const ResetGame = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/resetGame", {
                groupHealth: restartgroupHealth,
                milesTraveled: restartmilesTraveled,
                daysOnTrail: restartdaysOnTrail,
                message: restartmessage,
                playerNames: restartplayerNames,
                playerStatus:restartplayerStatus,
                playerProfession: restartplayerProfession,
                playerMoney: restartplayerMoney,
                startMonth: restartstartMonth,
            });

                setRestartGroupHealth(response.data.groupHealth);
                setRestartMilesTraveled(response.data.milesTraveled);
                setRestartDaysOnTrail(response.data.daysOnTrail);
                setRestartMessage(response.data.message);
                setRestartPlayerNames(response.data.playerNames);
                setRestartPlayerStatus(response.data.playerStatus);
                setRestartPlayerProfession(response.data.playerProfession);
                setRestartPlayerMoney(response.data.playerMoney);
                setRestartStartMonth(response.data.startMonth);
        }
        catch (error) {
            console.error("Error fetching Reset data:", error);
        }

    }


    return (
        <div className={"trail"} style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", height: "1000px", backgroundSize: "cover", backgroundPosition: "center", position: "relative", zIndex: -1}}>
            <h1>Oregon Trail</h1>
            <div className="player-info">
                <p>Player Names: {playerNames}</p>
                <p>Player Status:{playerStatus[0]}</p>
                <p>Player Profession: {playerProfession}</p>
                <p>Player Money: {playerMoney}</p>
                <p>Start Month: {startMonth}</p>
                <p>Group Health: {groupHealth}</p>
                <p>Miles Traveled: {milesTraveled}</p>
                <p>Days On Trail: {daysOnTrail}</p>
                <p>Message: {message}</p>
            </div>
            <div className="game-map">
                <p>{terrain} </p>
                <p>&nbsp;&nbsp;</p>
                <p>{weatherConditions}</p>
                <p>{pace}</p>
            </div>
            <div className="game-controls">
            <button className="game-control-button">Travel Trail</button>
                <button className="game-control-button">Stop to Rest</button>
                <button className="game-control-button" onClick={event => window.location.href="/mainmenu"}>Quit Game</button>
                <button className="game-control-button" onClick={()=>ResetGame()}>Reset Game</button>
                <Navigation></Navigation>
            </div>
        </div>
    )

}


export default Trail