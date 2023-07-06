function top10 (pName,pScore) {
    this.playerName = pName;

    this.playerScore = pScore;

    this.playerDate = new Date();
}

exports.topTen = function(pName,pScore) {
    return new top10(pName,pScore);
}
