// Purpose: To handle the setup screen information that will be displayed on the screen for the client
const gameData =  require("../Models/gameData");
const startGameData = gameData.getgameData()
const pg = require('pg').Pool;


const db = new pg({
    user: 'postgres',
    host: 'localhost',
    database: 'oregontrail_data',
    password: 'Cyberpunk2077',
    port: 5432,
});

db.connect();

exports.setupPlayerData = function (req, res) {
    const playerName = req.body.playerName;
    const playerProfession = req.body.playerProfession;
    const playerMoney = req.body.playerMoney;
    const startMonth = req.body.startMonth;
    const groupmembers = req.body.playerNames;

    const requiredFields = ['playerNames','playerName','playerProfession', 'playerMoney', 'startMonth'];
    const missingFields = requiredFields.filter(field => !req.body[field]);

    if (missingFields.length > 0) {
        res.status(400).send({
            message: `Missing required fields: ${missingFields.join(', ')}`,
        });
        console.log("Missing required fields: ", missingFields);
        return;
    }

    const query = {
        text: 'INSERT INTO playerdata(playername, playerprofession, playermoney, startmonth, groupmembers) VALUES($1, $2, $3, $4, $5)',
        values: [playerName, playerProfession, playerMoney, startMonth, groupmembers],
    };

    db.query(query, (error, result) => {
        if (error) {
            console.error("Error adding player data", error);
            res.status(500).send({
                message: "Error adding player data",
            });
        } else {
            console.log("Player data added successfully");
            startGameData.playerNames = [playerName];
            startGameData.playerNames = startGameData.playerNames.concat(req.body.playerNames);
            startGameData.playerProfession = req.body.playerProfession;
            startGameData.playerMoney = req.body.playerMoney;
            startGameData.startMonth = req.body.startMonth;
            startGameData.playerStatus =["Alive", "Alive", "Alive", "Alive"];

            res.setHeader('Content-Type', 'application/json');
            res.status(200).send({
                message: "Player data added successfully",
            });
        }
    });
};


