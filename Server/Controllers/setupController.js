exports.GameScreens = [];

// this is the setup screen information that will be displayed on the screen for the client
// it gameScreens is an array of strings that will be displayed on the screen
// each string is a different screen that will be displayed on the screen
// the client will be able to click on the screen and the screen will change to the next screen


const gameInfo =  require("../Models/gameData");
const startGameData = gameInfo.getgameData()

var gameScreen1 = "<p>Choose your Profession.</p>"

    + "<p>You may:</p>"
    + "<ol id=\"setupQuestions1\" >"
    + "<li id=\"bankerMenuItem\">Be a banker from Boston</li>"
    + "<li id=\"carpenterMenuItem\">Be a carpenter from Ohio</li>"
    + "<li id=\"farmerMenuItem\">Be a farmer from Illinois</li>"
    + "<li id=\"differencesMenuItem\">Find out the differences between the choices</li>"
    + "</ol>"
    + "<div id=\"selectedOption\">What is your choice?</div>";


var gameScreen2 = "<p>What is the name of the leader?</p>"
    + "Leader Name: <input id=\"player0\" />"
    + "<input type=\"button\" class=\"button-1\" id=\"page1sub\" value=\"Next\" />";


var gameScreen3 = "<p>What are the first names of the other members of your party?</p>"

    + "Player Name: <input id=\"player1\" /><br />"
    + "Player Name: <input id=\"player2\" /><br />"
    + "Player Name: <input id=\"player3\" /><br />"
    + "Player Name: <input id=\"player4\" /><br />"
    + "<input type=\"button\" class=\"button-1\" id=\"page2sub\" value=\"Next\" />";

var gameScreen4 = "<p>Which month would like to leave</p>"
    + "<ol id=\"setupQuestions2\" >"
    + "<li id=\"marchItem\">March</li>"
    + "<li id=\"aprilItem\">April</li>"
    + "<li id=\"mayItem\">May</li>"
    + "<li id=\"juneItem\">June</li>"
    + "<li id=\"julyItem\">July</li>"
    + "</ol>"
    + "<div id=\"selectedOption\">What is your choice?</div>";

var gameScreen5 = "<p>Here is the information you put in. </p>"

    + "<li> Leader's Profession:" + startGameData.playerProfession + ""
    + "<li> Leader's Name:" + startGameData.playerNames[0] + ""
    + "<li> Party Members " + startGameData.playerNames[1] + ", "
    + startGameData.playerNames[2] + ", " + startGameData.playerNames[3] + ", "
    + startGameData.playerNames[4] + ""
    + "<li> Starting Month:" + startGameData.startMonth + "";

exports.GameScreens.push(gameScreen1);
exports.GameScreens.push(gameScreen2);
exports.GameScreens.push(gameScreen3);
exports.GameScreens.push(gameScreen4);
exports.GameScreens.push(gameScreen5);


exports.getGameScreen = function(req, res) {
    const gameId = parseInt(req.params.id);
    const gameScreen = exports.GameScreens[gameId];
    if (gameScreen) {
        res.setHeader('Content-Type', 'text/html');
        res.send(gameScreen);
    } else {
        res.status(404).json({ message: "Game screen not found" });
    }
};

exports.savePlayerName = function(req, res) {
    startGameData.playerNames[0] = req.body.playerName;
    res.setHeader('Content-Type', 'text/html');
    res.send(startGameData.playerNames[0]);
}

exports.savePartyNames = function(req, res) {
    startGameData.playerNames[1,2,3,4] = req.body.playerNames;
    res.setHeader('Content-Type', 'text/html');
    res.send(startGameData.playerNames[1,2,3,4]);
}


exports.saveProfession = function(req, res) {
    startGameData.playerProfession = req.body.playerProfession;
    res.setHeader('Content-Type', 'text/html');
    res.send(startGameData.playerProfession);
};

exports.saveMoney = function(req, res) {
    startGameData.playerMoney = req.body.playerMoney;
    res.setHeader('Content-Type', 'text/html');
    res.send(startGameData.playerMoney);

};


exports.saveMonth = function(req, res) {
    startGameData.startMonth = req.body.startMonth;
    res.setHeader('Content-Type', 'text/html');
    res.send(startGameData.startMonth);
};

