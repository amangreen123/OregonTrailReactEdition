// Purpose: To handle the setup screen information that will be displayed on the screen for the client
const gameData =  require("../Models/gameData");
const startGameData = gameData.getgameData()
const pg = require('pg').Pool;


const db = new pg({
    user: 'postgres',
    host: 'localhost',
    database: 'oregontrail',
    password: 'Cyberpunk2077',
    port: 5432,
});

db.connect();

exports.setupPlayerData = function(req, res) {
    const playerName = req.body.playerName;
    const playerProfession = req.body.playerProfession;
    const playerMoney = req.body.playerMoney;
    const startMonth = req.body.startMonth;

    const query = {
        text: 'INSERT INTO playerdata(playername, playerprofession, playermoney, startmonth) VALUES($1, $2, $3, $4)',
        values: [playerName, playerProfession, playerMoney, startMonth],
    }

    db.query(query, (err, dbRes) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(dbRes.rows)
            startGameData.playerNames = [playerName];
            startGameData.playerNames = startGameData.playerNames.concat(req.body.playerNames);
            console.log("Player Names: ", startGameData.playerNames);
            startGameData.playerProfession = req.body.playerProfession;
            console.log("Player Profession: ", startGameData.playerProfession);
            startGameData.playerStatus = ["Alive", "Alive", "Alive", "Alive", "Alive"];
            startGameData.playerMoney = req.body.playerMoney
            startGameData.startMonth = req.body.startMonth;
        }
          
        res.setHeader('Content-Type', 'application/json');
        res.send(startGameData);

    });
}


// db.query("SELECT * FROM playerdata", (err, res) => {
//    if (err) {
//         console.log(err.stack)
//     } else {
//          console.log(res.rows)
//    }
//     db.end();
//  });

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