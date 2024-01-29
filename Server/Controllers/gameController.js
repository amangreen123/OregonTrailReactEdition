// Purpose: To control the game data and update it
// this is the controller for the game data
// it will update the game data and send it to the front end
// called by the game routes

const terrain = require('../Models/terrain');
const weather = require('../Models/weather');
const pace = require('../Models/pace');
const gameData = require('../Models/gameData');
const startGameData = gameData.getgameData()


exports.paces = function (req,res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(pace.getAllPaces())
}

exports.newterrain = function (req,res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(terrain.newTerrain())
}

exports.randomTerrain = function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.send(terrain.getRandomTerrain())
}

exports.randomWeather = function (req,res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(weather.getRandomWeather()) }

exports.allWeather = function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.send(weather.newWeather())
}

exports.getgameData = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.send(startGameData);
}


exports.resetGame = function(req, res) {
//resets all game data
    startGameData.groupHealth = 100;

    startGameData.milesTraveled = 0;

    startGameData.daysOnTrail = 0;

    startGameData.message = [""];

    startGameData.playerNames = ["", "", "", "", ""];

    startGameData.playerStatus = ["", "", "", "", ""];

    startGameData.playerProfession = "";

    startGameData.playerMoney = 0;

    startGameData.startMonth ="";

    res.setHeader('Content-Type', 'application/json');
    res.send(startGameData)
}

exports.updateGame = function(req, res) {

    //Ensures randomization of terrain and weather
    startGameData.currentTerrain = terrain.getRandomTerrain();

    const terrainToWeatherMap = {
        "Plains": weather.getPlainWeather(),
        "Mountains": weather.getMountainWeather(),
        "Desert": weather.getDesertWeather(),
        "Forest": weather.getForestWeather(),
        "Grassland": weather.getGrasslandWeather()
    }

    startGameData.currentWeather = weather.getRandomWeather(terrainToWeatherMap[startGameData.currentTerrain.name]);

    startGameData.paces = pace.getAllPaces();
    console.log("The current pace" + startGameData.paces.name)

    startGameData.groupHealth += startGameData.paces.healthChange;

    startGameData.milesTraveled = startGameData.milesTraveled + (startGameData.currentWeather.miles * startGameData.currentPace.miles);

    startGameData.groupHealth += startGameData.currentPace.healthChange;

    if(startGameData.milesTraveled > 500 && startGameData.daysOnTrail < 45 ) {

        startGameData.message = "You Won!"

    } else {
        startGameData.message = "";
    }
    // every time the game updates a day is recorded
    if (startGameData.daysOnTrail < 45) {
        startGameData.daysOnTrail += 1;
    } else {
        startGameData.message = "Your party is lost in the snowy mountains and has eaten each other.";
    }

    //if health happens to go over dont allow it
    if (startGameData.groupHealth > 100){
        startGameData.groupHealth = 100;
    } else {
    }

    if (startGameData.groupHealth <= 100 && startGameData.groupHealth >= 80){

        startGameData.message = "good";

    } else if (startGameData.groupHealth < 80 && startGameData.groupHealth >= 50){
        startGameData.message = "fair";

    } else if (startGameData.groupHealth < 50 && startGameData.groupHealth >= 20){

        startGameData.message = "poor";

        for (i = 0; i < 5; i++){
            var chance = Math.floor(Math.random() * 100) + 1;

            if (chance <= 3){
                startGameData.playerStatus[i] = "Dead";
            } else{
            }
        }

    } else if (startGameData.groupHealth < 20 && startGameData.groupHealth > 0){
        startGameData.message = "very poor";

        for (i = 0; i < 5; i++){
            const chance = Math.floor(Math.random() * 100) + 1;
            if (chance <= 10){
                startGameData.playerStatus[i] = "Dead";
            } else {
            }
        }
    }else{
        startGameData.message = "Everyone is dead";
        for (i = 0; i < 5; i++){
            startGameData.playerStatus[i] = "Dead";
        }

    }
    res.setHeader('Content-Type', 'application/json');
    res.send(startGameData);
}