function Terrain(name, url) {
    this.name = name;
    this.imageUrl = url;
}

const allTerrains = [];

allTerrains.push(new terrain("Mountains", "images/terrains/mountains.jpg"));
allTerrains.push(new terrain("Grassland", "images/terrains/grassland.jpg"));
allTerrains.push(new terrain("Plains", "images/terrains/plains.jpg"));
allTerrains.push(new terrain("Forest", "images/terrains/forest.jpg"));
allTerrains.push(new terrain("Desert", "images/terrains/desert.jpg"));

exports.getRandomTerrain = function() {
    var rand = Math.floor(Math.random() * allTerrains.length);
    return allTerrains[rand];
}

exports.newTerrain = function() {
    return allTerrains;
}