"use strict";

const title = document.getElementById("titleHeader");
const paragraph = document.getElementById("p1");
const paragraph2 = document.getElementById("p2");

const name1 = "Tom";
let locatie;
locatie = "Howest Brugge";
let message = "einde oefening";

//title contains name

title.innerText = `Hello ${name1}`;
paragraph.innerText = `Welkom in ${locatie}`;
paragraph2.innerText = message;
