"use strict";

window.addEventListener("load", initialize);

// global vars

let title;
const userName = "Tom";

function initialize() {
  title = document.getElementById("titleHeader");
  title.innerText = userName;
}
