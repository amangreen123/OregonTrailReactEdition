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

exports.getgameData = function(req, res)
{
    try {
        const response = db.query('SELECT * FROM playerdata ORDER BY id DESC LIMIT 1', (error, result) => {

            if (error) {
                console.error("Error fetching player data:", error);
                res.status(500).send({
                    message: "Error fetching player data",
                });
            } else {
                console.log("Player data fetched successfully");
                const initialGameState = result.rows[0];

                const groupMembersArray = initialGameState.groupmembers.split(",").map(name => name.trim());
                startGameData.playerNames = [
                    initialGameState.playername,
                    ...groupMembersArray
                ];

                console.log("Player Names: ", startGameData.playerNames);

                startGameData.playerProfession = initialGameState.playerprofession;
                startGameData.playerMoney = initialGameState.playermoney;
                startGameData.startMonth = initialGameState.startmonth;
                startGameData.playerStatus =["Alive", "Alive", "Alive", "Alive"];

                res.setHeader('Content-Type', 'application/json');
                res.status(200).send(startGameData);
            }
        }
        );
    } catch (error) {
        console.error("Error fetching player data:", error);
        res.status(500).send({
            message: "Error fetching player data",
        });
    }

};

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
            console.log(error.stack);
            res.status(500).send({
                message: "Error adding player data",
                console: error.stack,  
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


