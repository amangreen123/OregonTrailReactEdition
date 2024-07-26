// Purpose: Server for Oregon Trail Game
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
//test

const gameData = require("./Models/gameData");
gameData.getgameData();
const pace = require("./Models/pace");
pace.getAllPaces();
const terrain = require("./Models/terrain");
terrain.newTerrain();
const weather = require("./Models/weather");
weather.getRandomWeather();
const toptenList = require("./Models/topTen");
toptenList.topTen();

const topTenController = require("./Controllers/topTenController");
const gameController = require("./Controllers/gameController");
const setupController = require("./Controllers/setupController");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({type:'application/json'}));


app.get("/api/message", (req, res) => {
    res.json({ message: "Welcome to the Oregon Trail!" });
});

app.route('/api/topTen')
    .get(topTenController.getCurrentScores)
    .post(topTenController.saveTopScore)
app.route('/api/setup/player')
    .get(setupController.getgameData);
app.route('/api/updateGame')
    .get(gameController.updateGame);
app.route('/api/resetGame')
    .get(gameController.resetGame);
app.route('/api/getAllPaces')
    .get(gameController.paces);
app.route('/api/terrain')
    .get(gameController.newterrain);
app.route('/api/setup/createPlayer')
    .put(setupController.setupPlayerData)
app.route('/api/weather')
    .get(gameController.randomWeather);

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});

module.exports = app;