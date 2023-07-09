import React from "react";


function sortScore () {
    const scores = [8890, 9000, 8000, 8645, 7755, 6500, 7530, 6345, 5500];
    const sortedScores = scores.sort(function(a, b){return a - b}).reverse();
    return sortedScores;
}


export default sortScore;