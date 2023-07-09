let topTen = require('../Models/topTen');

exports.currentTopScores = [];

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