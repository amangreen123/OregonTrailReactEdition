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

exports.updateGame = function (req, res) {
    // Ensure randomization of terrain and weather
    startGameData.currentTerrain = terrain.getRandomTerrain();

    const terrainToWeatherMap = {
        "Plains": weather.getPlainWeather(),
        "Mountains": weather.getMountainWeather(),
        "Desert": weather.getDesertWeather(),
        "Forest": weather.getForestWeather(),
        "Grassland": weather.getGrasslandWeather()
    };

    // Get the selected pace from the client
    const selectedPace = req.query.pace;
    console.log("Selected Pace:", selectedPace);
    // Use the selected pace to retrieve the corresponding pace data
    const selectedPaceData = pace.getAllPaces().find(p => p.name === selectedPace);
    console.log("Selected Pace Data:", selectedPaceData);

    if(selectedPaceData === undefined) {
        console.error("Error: Selected Pace not found");
        res.status(400).json({ error: "Selected Pace not found" });
        return;
    }
    // Set the current pace in the game data
    startGameData.currentPace = selectedPaceData;

    startGameData.currentWeather = weather.getRandomWeather(terrainToWeatherMap[startGameData.currentTerrain.name]);

    startGameData.groupHealth += selectedPaceData.healthChange;

    startGameData.milesTraveled = startGameData.milesTraveled + (startGameData.currentWeather.miles * selectedPaceData.miles);

    startGameData.groupHealth += selectedPaceData.healthChange;

    if (startGameData.milesTraveled > 500 && startGameData.daysOnTrail < 45) {
        startGameData.message = "You Won!";
    } else {
        startGameData.message = "";
    }

    // Every time the game updates, a day is recorded
    if (startGameData.daysOnTrail < 45) {
        startGameData.daysOnTrail += 1;
    } else {
        startGameData.message = "Your party is lost in the snowy mountains and has eaten each other.";
    }

    // If health goes over 100, don't allow it
    if (startGameData.groupHealth > 100) {
        startGameData.groupHealth = 100;
    }

    // Determine message based on group health
    if (startGameData.groupHealth <= 100 && startGameData.groupHealth >= 80) {
        startGameData.message = "good";
    } else if (startGameData.groupHealth < 80 && startGameData.groupHealth >= 50) {
        startGameData.message = "fair";
    } else if (startGameData.groupHealth < 50 && startGameData.groupHealth >= 20) {
        startGameData.message = "poor";

        for (let i = 0; i < 5; i++) {
            const chance = Math.floor(Math.random() * 100) + 1;

            if (chance <= 3) {
                startGameData.playerStatus[i] = "Dead";
            }
        }
    } else if (startGameData.groupHealth < 20 && startGameData.groupHealth > 0) {
        startGameData.message = "very poor";

        for (let i = 0; i < 5; i++) {
            const chance = Math.floor(Math.random() * 100) + 1;
            if (chance <= 10) {
                startGameData.playerStatus[i] = "Dead";
            }
        }
    } else {
        startGameData.message = "Everyone is dead";
        for (let i = 0; i < 5; i++) {
            startGameData.playerStatus[i] = "Dead";
        }
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(startGameData);
};