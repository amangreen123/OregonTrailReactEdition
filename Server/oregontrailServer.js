const express = require("express");
const cors = require("cors");
const app = express();

const gameData = require('./Models/gameData');
gameData.getgameData();
const pace = require('./Models/pace');
pace.getAllPaces();
const terrain = require('./Models/terrain');
terrain.newTerrain();
const weather = require('./Models/weather');
weather.newWeather();
const toptenList = require('./Models/topTen');
toptenList.topTen();

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
    res.json({ message: "Welcome to the Oregon Trail" });
});

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