//jshint esversion:6

// import fs from "fs";

const sh = require("superheroes");

var myShName = sh.random();

// console.log(myShName);

const sv = require("supervillains");

var mySvName = sv.random();

console.log(mySvName);

var allSv = sv.all;

console.log(allSv);