"use strict";
let sauces = [{ name: "bufallo", spice: 5, awesome: true }, { name: "BBQ", spice: 3, awesome: false }, { name: "ranch", spice: 0, awesome: true }, { name: "Blazin", spice: 10, awesome: false }];
console.log(sauces);
function getSauceByName(array, sauceName) {
    for (let sauce of array) {
        if (sauceName === sauce.name) {
            return sauce;
        }
    }
    ;
}
console.log(getSauceByName(sauces, "Ranch"));
function getAwesomeSauce(array) {
    let awesomeArray = [];
    for (let sauce of array) {
        if (sauce.awesome === true) {
            awesomeArray.push(sauce);
        }
    }
    return awesomeArray;
}
console.log(getAwesomeSauce(sauces));
function gimmeSpicy(array, desiredSpice) {
    let spiceArray = [];
    for (let sauce of array) {
        if (sauce.spice >= desiredSpice) {
            spiceArray.push(sauce);
        }
    }
    return spiceArray;
}
console.log(gimmeSpicy(sauces, 5));
function makeAwesomeSauce(name, spice) {
    let newSauce = { name: name, spice: spice, awesome: true };
    sauces.push(newSauce);
    return sauces;
}
console.log(makeAwesomeSauce("Thousand Island", 2));
