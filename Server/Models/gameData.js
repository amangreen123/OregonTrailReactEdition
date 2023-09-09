const terrain = require("./terrain");
const  weather = require("./weather");
const  pace = require("./pace");

// gameData class
// This class is used to store the game data
function gameData() {

    this.groupHealth = 100;
    this.currentTerrain = terrain.getRandomTerrain();
    this.currentWeather = weather.getRandomWeather();

    this.milesTraveled = 0;

    this.currentPace = pace.getAllPaces();

    this.daysOnTrail = 0;

    this.message = "";

    this.message2 = "";

    this.playerNames = ["Aaron", "Jasmine", "Warren", "Winter", "Withney"];

    this.playerStatus = ["Alive", "Alive", "Alive", "Alive", "Alive"];

    this.playerProfession = "";

    this.playerMoney = 0;

    this.startMonth ="";

}




exports.getgameData = function () {
    return new gameData();
}

exports.gameData = function () {
    return gameData;
}
