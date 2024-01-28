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


    const existingRowQuery = {
        text: 'SELECT * FROM playerdata WHERE playername = $1',
        values: [playerName]
    };

    db.query(existingRowQuery, (err, dbRes) => {
        if (err) {
            console.error(err.stack);
            res.status(500).send('Error checking existing player data');
        } else {
            if (dbRes.rows.length > 0) {
                console.log("Player exists, updating row");
                //ROW EXISTS, UPDATE ROW
                const updateQuery = {
                    text: 'UPDATE playerdata SET playerprofession = $2, playermoney = $3, startmonth = $4, groupmembers = $5 WHERE playername = $1 RETURNING *',
                    values: [playerName, playerProfession, playerMoney, startMonth, groupmembers]
                };

                db.query(updateQuery, (err, updateRes) => {
                    handleQueryResult(err, updateRes, res);
                });
            } else {
                //ROW DOES NOT EXIST, CREATE ROW
                console.log("Player does not exist, creating new row");
                const insertQuery = {
                    text: 'INSERT INTO playerdata(playername, playerprofession, playermoney, startmonth, groupmembers) VALUES($1, $2, $3, $4, $5) RETURNING *',
                    values: [playerName, playerProfession, playerMoney, startMonth, groupmembers]
                };

                db.query(insertQuery, (err, insertRes) => {
                    handleQueryResult(err, insertRes, res);
                });
            }
        }
    });

    function handleQueryResult(err, dbRes, res) {
        if (err) {
            console.error(err.stack);
            res.status(500).send('Error processing player data');
        } else {
            console.log(dbRes.rows);
            startGameData.playerNames = [playerName];
            startGameData.playerNames = startGameData.playerNames.concat(req.body.playerNames);
            console.log("Player Names: ", startGameData.playerNames);
            startGameData.playerProfession = req.body.playerProfession;
            console.log("Player Profession: ", startGameData.playerProfession);
            startGameData.playerStatus = ["Alive", "Alive", "Alive", "Alive", "Alive"];
            startGameData.playerMoney = req.body.playerMoney;
            startGameData.startMonth = req.body.startMonth;

            res.setHeader('Content-Type', 'application/json');
            res.send(startGameData);
        }
    }
};




// const requiredFields = ['playerNames','playerProfession', 'playerMoney', 'startMonth'];
// const missingFields = requiredFields.filter(field => !startGameData[field]);
//
// if (missingFields.length > 0) {
//     res.status(400).send({
//         message: `Missing required fields: ${missingFields.join(', ')}`,
//     });
//     console.log("Missing required fields: ", missingFields);
//     return;
// }


//create Databases with fields
// PlayerName, PlayerProfession, PlayerMoney, StartMonth