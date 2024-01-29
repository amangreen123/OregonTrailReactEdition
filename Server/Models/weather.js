// This file contains the weather class and the weather array
// This file is used to get the weather information
function weather(id, type, healthChange, mileChange, probability) {
    this.id = id;
    this.type = type;
    this.healthChange = healthChange;
    this.mileChange = mileChange;
    this.probability = probability;
}

var plainWeather = [];
plainWeather.push(new weather(3, "Warm", +1, 1, .2));
plainWeather.push(new weather(4, "Cool", +1, .95, .1));
plainWeather.push(new weather(7, "Rain", -4, .6, .1));
plainWeather.push(new weather(8, "Heavy Rain", -8, .4, .05));
plainWeather.push(new weather(9, "Snow", -15, .3, .05));
plainWeather.push(new weather(11, "Heavy Fog", -3, .5, .05));

var mountainWeather = [];
mountainWeather.push(new weather(1, "Very Hot", -8, .7, .1));
mountainWeather.push(new weather(2, "Hot", -3, .9, .1));
mountainWeather.push(new weather(5, "Cold", -5, .8, .1));
mountainWeather.push(new weather(6, "Very Cold", -12, .7, .1));
mountainWeather.push(new weather(8, "Heavy Rain", -8, .4, .05));
mountainWeather.push(new weather(10, "Blizzard", -30, .1, .05));
mountainWeather.push(new weather(11, "Heavy Fog", -3, .5, .05));

var desertWeather = [];
desertWeather.push(new weather(1, "Very Hot", -8, .7, .1));
desertWeather.push(new weather(2, "Hot", -3, .9, .1));
desertWeather.push(new weather(3, "Warm", +1, 1, .2));
desertWeather.push(new weather(4, "Cool", +1, .95, .1));
desertWeather.push(new weather(5, "Cold", -5, .8, .1));
desertWeather.push(new weather(6, "Very Cold", -12, .7, .1));

var forestWeather = [];
forestWeather.push(new weather(1, "Very Hot", -8, .7, .1));
forestWeather.push(new weather(2, "Hot", -3, .9, .1));
forestWeather.push(new weather(3, "Warm", +1, 1, .2));
forestWeather.push(new weather(4, "Cool", +1, .95, .1));
forestWeather.push(new weather(5, "Cold", -5, .8, .1));
forestWeather.push(new weather(6, "Very Cold", -12, .7, .1));
forestWeather.push(new weather(7, "Rain", -4, .6, .1));
forestWeather.push(new weather(8, "Heavy Rain", -8, .4, .05));
forestWeather.push(new weather(9, "Snow", -15, .3, .05));
forestWeather.push(new weather(10, "Blizzard", -30, .1, .05));
forestWeather.push(new weather(11, "Heavy Fog", -3, .5, .05));

//what weather should be in grassland?
var grasslandWeather = [];
grasslandWeather.push(new weather(1, "Very Hot", -8, .7, .1));
grasslandWeather.push(new weather(2, "Hot", -3, .9, .1));
grasslandWeather.push(new weather(3, "Warm", +1, 1, .2));
grasslandWeather.push(new weather(4, "Cool", +1, .95, .1));
grasslandWeather.push(new weather(7, "Rain", -4, .6, .1));
grasslandWeather.push(new weather(8, "Heavy Rain", -8, .4, .05));
grasslandWeather.push(new weather(9, "Snow", -15, .3, .05));
grasslandWeather.push(new weather(11, "Heavy Fog", -3, .5, .05));





exports.getRandomWeather = function (terrain) {
    let terrainWeather;
    switch (terrain) {
        case 'plain':
            terrainWeather = plainWeather;
            break;
        case 'mountain':
            terrainWeather = mountainWeather;
            break;
        case 'desert':
            terrainWeather = desertWeather;
            break;
        case 'forest':
            terrainWeather = forestWeather;
            break;
        case 'grassland':
            terrainWeather = grasslandWeather;
            break;
        default:
            terrainWeather = plainWeather;
    }

    return terrainWeather[Math.floor(Math.random() * terrainWeather.length)];
}

// exports.newWeather = function () {
//     return allWeather;
// }

exports.getPlainWeather = function () {
    return plainWeather;
}

exports.getMountainWeather = function () {
    return mountainWeather;
}

exports.getDesertWeather = function () {
    return desertWeather;
}

exports.getForestWeather = function () {
    return forestWeather;
}

exports.getGrasslandWeather = function () {
    return grasslandWeather;
}


