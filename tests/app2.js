

let alienDiv = document.getElementById("alien");

let parks = ["H", "N", "C"];


for(let i =0; i < parks.length; i++) {


alienDiv.innerHTML += parks[i];

}



parks.forEach( park => {

alienDiv.innerHTML += park;


})