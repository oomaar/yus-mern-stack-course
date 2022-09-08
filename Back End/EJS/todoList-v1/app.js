//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = []; //Arrays and objects can be varried with const
const workItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
    const day = date.getDate();
    const day2 = date.getDay();
    res.render("list", { listTitle: day, newListItem: items, justDay: day2 });
});

app.post("/", function(req, res) {
    const item = req.body.newItem;

    if (req.body.button === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req, res) {
    res.render("list", {
        listTitle: "Work List",
        newListItem: workItems,
        justDay: "",
    });
});

app.post("/work", function(req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(8000, function() {
    console.log("Server is up and running on port 8000");
});

// var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// var today  = new Date();

// console.log(today.toLocaleDateString("en-US")); // 9/17/2016
// console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
// console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016

//    var currentDay = today.getDay();
//var day = "";
// switch (currentDay) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;
// }