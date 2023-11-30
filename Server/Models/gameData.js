const terrain = require("./terrain");
const  weather = require("./weather");
const  pace = require("./pace");

// gameData class
// This class is used to store the game data


 const gameData = {
    playerNames: [],// name of group members
    playerStatus: ["Alive", "Alive", "Alive", "Alive", "Alive"],//checks if player is alive or dead
    playerProfession: "",//role of the leader
    playerMoney: 0 ,//money the player has
    startMonth: "",// the month the player chooses to start the game
    milesTraveled: 0,// keeps track of how far wagon team has progressed
    groupHealth: 100,//represents the health of the wagon group
    currentPace: pace.getAllPaces(),//assigns a random pace
    daysOnTrail: 0,//days on trail
    currentWeather: weather.getRandomWeather(),//assigns a random weather
    currentTerrain: terrain.getRandomTerrain(),//assigns a random terrain
    message: "", //Message to display on client side like "You have died of dysentery"
}

exports.getgameData = () => {

    return structuredClone(gameData);
}


