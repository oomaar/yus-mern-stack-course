//jshint esversion:6

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;

    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_field: {
                FNAME: firstName,
                LNAME: lastName,
            },
        }, ],
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us2.api.mailchimp.com/3.0/lists/e02ffcb81d";

    const options = {
        method: "POST",
        auth: "omar:b57415df5221025ea1481ce1e84067bf-us2",
    };

    const request = https.request(url, options, function(response) {
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data) {
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();
});

app.post("/failure", function(req, res) {
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is up and running on port 3000");
});

//API key
// b57415df5221025ea1481ce1e84067bf-us2
//List ID
//e02ffcb81d