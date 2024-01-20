exports.GameScreens = [];
// this is the setup screen information that will be displayed on the screen for the client
// it gameScreens is an array of strings that will be displayed on the screen
// each string is a different screen that will be displayed on the screen
// the client will be able to click on the screen and the screen will change to the next screen

const gameData =  require("../Models/gameData");
const startGameData = gameData.getgameData()


exports.saveGameData = function(req, res) {
    startGameData.playerNames = [req.body.playerName];
    startGameData.playerNames = startGameData.playerNames.concat(req.body.playerNames);
    console.log("req.body:", req.body);
    console.log("req.body.playerName:", req.body.playerName);
    console.log("req.body.playerNames:", req.body.playerNames);
    startGameData.playerProfession = req.body.playerProfession;
    startGameData.playerStatus = ["Alive", "Alive", "Alive", "Alive", "Alive"];
    startGameData.playerMoney = req.body.playerMoney;
    startGameData.startMonth = req.body.startMonth;
    res.setHeader('Content-Type', 'application/json');
    res.send(startGameData);
}

