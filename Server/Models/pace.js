// this is the pace model
// this contains the pace information
// this is used to get the pace information
function allPaces(name,miles,healthChange){
    this.name = name;
    this.miles = miles;
    this.healthChange = healthChange;
}

var paces = [];

paces.push(new allPaces("Steady",20,0));
paces.push(new allPaces("Strenuous",25,-3));
paces.push(new allPaces("Grueling",30,-8));
paces.push(new allPaces("Resting",0,5));

function currentPace (){

    return paces;
}
exports.getAllPaces = currentPace;