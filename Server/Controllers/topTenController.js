let topTen = require('../Models/topTen');
// this is the topTenController.js file
// it will handle all requests to the /topTen endpoint
// it will use the topTen.js model to get the top ten scores
// and send them back to the client
// it will also use the topTen.js model to save a new score
// and send back the new top ten scores
// it will also use the topTen.js model to get the current top ten scores
// and send them back to the client

exports.currentTopScores = [];
// data being displayed in the get request in the postman
exports.currentTopScores.push(topTen.topTen("Winter", 5));

exports.currentTopScores.push(topTen.topTen("Aaron", 50));

exports.currentTopScores.push(topTen.topTen("Warren", 40));

exports.currentTopScores.push(topTen.topTen("Jasmine", 35));

exports.currentTopScores.push(topTen.topTen("Withney", 30));


exports.getCurrentScores = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentTopScores);
}

exports.saveTopScore = function(req,res){
    var newScore = topTen.topTen(req.body.playerName,req.body.playerScore)
    exports.currentTopScores.push(newScore);
    res.setHeader('Content-Type', 'application/json');

    res.send(exports.currentTopScores);
}