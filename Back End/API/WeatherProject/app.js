//jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    const query = req.body.cityName;
    const apiKey = "26de8b350912fc01b3db553d6845343a";
    const apiUnit = "metric";
    const url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        query +
        "&appid=" +
        apiKey +
        "&units=" +
        apiUnit;

    https.get(url, function(response) {
        console.log(response.statusCode);
        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            // console.log(weatherData);
            // const objecttt = {
            //     name: "Angela",
            //     age: "26",
            // };
            // console.log(JSON.stringify(objecttt));
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const weatherIcon = weatherData.weather[0].icon;
            const imageURL =
                "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
            // console.log(temp);
            // res.send(
            //     "<h1>The Temprature in Cairo is " +
            //     temp +
            //     " Degrees Celcius.</h1><br>" +
            //     "<h1>The Weather is currently " +
            //     weatherDescription +
            //     " now</h1>"
            // );
            res.write(
                "<h1>The Temprature in " +
                query +
                " is " +
                temp +
                " Degrees Celcius.</h1>"
            );
            res.write(
                "<h1>The Weather is currently " + weatherDescription + " now</h1>"
            );
            res.write("<img src=" + imageURL + ">");
            res.send();
        });
    });
});

app.listen(3000, function() {
    console.log("server is running on port 3000");
});