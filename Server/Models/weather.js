function weather(id, type, healthChange, mileChange, probability) {
    this.id = id;
    this.type = type;
    this.healthChange = healthChange;
    this.mileChange = mileChange;
    this.probability = probability;
}

let allWeather = [];


allWeather.push(new weather(1, "Very Hot", -8, .7, .1));
allWeather.push(new weather(2, "Hot", -3, .9, .1));
allWeather.push(new weather(3, "Warm", +1, 1, .2));
allWeather.push(new weather(4, "Cool", +1, .95, .1));
allWeather.push(new weather(5, "Cold", -5, .8, .1));
allWeather.push(new weather(6, "Very Cold", -12, .7, .1));
allWeather.push(new weather(7, "Rain", -4, .6, .1));
allWeather.push(new weather(8, "Heavy Rain", -8, .4, .05));
allWeather.push(new weather(9, "Snow", -15, .3, .05));
allWeather.push(new weather(10, "Blizzard", -30, .1, .05));
allWeather.push(new weather(11, "Heavy Fog", -3, .5, .05));
