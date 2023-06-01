import React from "react";


function sortScore () {
    const score = [8890, 9000, 8000, 8645, 7755, 6500, 7530, 6345, 5500];
    score.sort(function(a, b){return a - b});
}


export default sortScore;