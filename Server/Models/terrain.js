
//How to get images to show up on react front end
//https://stackoverflow.com/questions/46175654/how-to-display-images-in-react

function Terrain(name, url) {
    this.name = name;
    this.imageUrl = url;
}


const allTerrains = [];

allTerrains.push(new Terrain("Mountains", "https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_1280.jpg"));
allTerrains.push(new Terrain("Grassland", "https://cdn.pixabay.com/photo/2017/04/07/18/23/landscape-2211587_1280.jpg"));
allTerrains.push(new Terrain("Plains", "https://cdn.pixabay.com/photo/2015/03/10/09/32/plains-666927_1280.jpg"));
allTerrains.push(new Terrain("Forest", "https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_1280.jpg"));
allTerrains.push(new Terrain("Desert", "https://cdn.pixabay.com/photo/2016/03/21/10/44/desert-1270345_1280.jpg"));

exports.getRandomTerrain = function() {
    const rand = Math.floor(Math.random() * allTerrains.length);
    return allTerrains[rand];
}

exports.newTerrain = function() {
    return allTerrains;
}