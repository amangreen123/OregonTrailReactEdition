// this is the server file for the oregon trail game
// this file will be used to connect to the database and to the client side
// this file will also be used to run the server and to run the game

const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const gameData = require("./Models/gameData");
gameData.getgameData();
const pace = require("./Models/pace");
pace.getAllPaces();
const terrain = require("./Models/terrain");
terrain.newTerrain();
const weather = require("./Models/weather");
weather.newWeather();
const toptenList = require("./Models/topTen");
toptenList.topTen();

const topTenController = require("./Controllers/topTenController");
const gameController = require("./Controllers/gameController");
const setupController = require("./Controllers/setupController");
const {post} = require("axios");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.json());
app.get("/message", (req, res) => {
    res.json({ message: "Welcome to the Oregon Trail" });
});

app.route('/api/topTen')
    .get(topTenController.getCurrentScores)
    .post(topTenController.saveTopScore)
app.route('/api/setup/player')
    .get(gameController.getgameData);
app.route('/api/updateGame')
    .get(gameController.updateGame);
app.route('/api/resetGame')
    .get(gameController.resetGame);
app.route('/api/getAllPaces')
    .get(gameController.paces);
app.route('/api/terrain')
    .get(gameController.newterrain);
app.route('/api/setup/screen/:id')
    .get(setupController.getGameScreen);
app.route('/api/setup/updatePlayer')
    .post(setupController.saveGameData);


app.get('/', function (req, res) {
    res.sendFile('index.html', {root: './client/views' })
})
app.get('/mainmenu', function (req, res) {
    res.sendFile('mainmenu.html', {root: './client/views' })
})
app.get('/topten', function (req, res) {
    res.sendFile('topten.html', {root: './client/views' })
})
app.get('/setup', function (req, res) {
    res.sendFile('setup.html', {root: './client/views' })
})
app.get('/trail', function (req, res) {
    res.sendFile('trail.html', {root: './client/views' })
})

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});