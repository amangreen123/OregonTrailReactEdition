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



exports.resetGame = function(req, res) {
//resets all game data
    startGameData.groupHealth = 100;

    startGameData.milesTraveled = 0;

    startGameData.daysOnTrail = 0;

    startGameData.message = [""];

    startGameData.playerNames = ["", "", "", "", ""];

    startGameData.playerStatus = ["Alive", "Alive", "Alive", "Alive", "Alive"];

    startGameData.playerProfession = "";

    startGameData.playerMoney = 0;

    startGameData.startMonth = "";

    res.setHeader('Content-Type', 'application/json');
    res.send(startGameData)
}

exports.updateGame =  function (req, res) {
        try {
            // Ensure randomization of terrain and weather
            startGameData.currentTerrain = terrain.getRandomTerrain();
            startGameData.currentWeather = weather.getRandomWeather();

            const terrainToWeatherMap = {
                Plains: weather.getPlainWeather(),
                Mountains: weather.getMountainWeather(),
                Desert: weather.getDesertWeather(),
                Forest: weather.getForestWeather(),
                Grassland: weather.getGrasslandWeather(),
            };

            // Get the selected pace from the client
            const selectedPace = req.query.pace;

            // Use the selected pace to retrieve the corresponding pace data
            const selectedPaceData = pace.getAllPaces().find(p => p.name === selectedPace);

            // Update miles traveled based on selected pace
            startGameData.milesTraveled += selectedPaceData && selectedPaceData.miles || 0;


            // Update specific properties in the game data based on selected pace
            startGameData.groupHealth += selectedPaceData && selectedPaceData.healthChange || 0;
            startGameData.currentPace = selectedPaceData;
            startGameData.currentWeather = weather.getRandomWeather(terrainToWeatherMap[startGameData.currentTerrain.name]);

        // Determine and update message based on game progress
        if (startGameData.milesTraveled > 500 && startGameData.daysOnTrail < 45 && startGameData.groupHealth > 0) {
            startGameData.message = "You Won!";

        } else {
            if (startGameData.daysOnTrail < 45) {
                startGameData.daysOnTrail += 1;
            } else {
                startGameData.message = "Your party is lost in the snowy mountains and has eaten each other.";
            }

            // Update group health and message based on health status
            if (startGameData.groupHealth > 100) {
                startGameData.groupHealth = 100;

                startGameData.message = "excellent";
            } else if (startGameData.groupHealth <= 100 && startGameData.groupHealth >= 80) {
                startGameData.message = "good";
            } else if (startGameData.groupHealth < 80 && startGameData.groupHealth >= 50) {
                startGameData.message = "fair";
            } else if (startGameData.groupHealth < 50 && startGameData.groupHealth >= 20) {
                startGameData.message = "poor";

                // Update player status based on chance
                for (let i = 0; i < 5; i++) {
                    const chance = Math.floor(Math.random() * 100) + 1;

                    if (chance <= 3) {
                        startGameData.playerStatus[i] = "Dead";
                    }
                }
            } else {
                startGameData.message = "Everyone is dead";
                for (let i = 0; i < 5; i++) {
                    startGameData.playerStatus[i] = "Dead";
                }
            }
        }

        res.setHeader("Content-Type", "application/json");
        res.send(startGameData);
    } catch (error) {
        console.error("Error updating game data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

