const terrain = require("./terrain");
const  weather = require("./weather");
const  pace = require("./pace");

// gameData class
// This class is used to store the game data


 const gameData = {
    groupHealth: 100,
    currentTerrain: terrain.getRandomTerrain(),
    currentWeather: weather.getRandomWeather(),
    milesTraveled: 0,
    currentPace: pace.getAllPaces(),
    daysOnTrail: 0,
    message: "",
    playerNames: ["Aaron", "Jasmine", "Warren", "Winter", "Withney"],
    playerStatus: ["Alive", "Alive", "Alive", "Alive", "Alive"],
    playerProfession: "",
    playerMoney: 0,
    startMonth: ""
}

exports.getgameData = () => {
    return structuredClone(gameData);
}


