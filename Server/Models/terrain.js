function Terrain(name, url) {
    this.name = name;
    this.imageUrl = url;
}

const allTerrains = [];

allTerrains.push(new Terrain("Mountains", "images/mountains.jpg"));
allTerrains.push(new Terrain("Grassland", "images/grassland.jpg"));
allTerrains.push(new Terrain("Plains", "images/plains.jpg"));
allTerrains.push(new Terrain("Forest", "images/forest.jpg"));
allTerrains.push(new Terrain("Desert", "images/desert.jpg"));

exports.getRandomTerrain = function() {
    const rand = Math.floor(Math.random() * allTerrains.length);
    return allTerrains[rand];
}

exports.newTerrain = function() {
    return allTerrains;
}