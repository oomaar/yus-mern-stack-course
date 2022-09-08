// Server requires and Declrations
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// DataBase Connection and code
mongoose.connect('mongodb://localhost:27017/wikiDB', { useNewUrlParser: true, useUnifiedTopology: true });

const articleSchema = {
    title: String,
    content: String
}

const Article = new mongoose.model("Article", articleSchema);

// Server Routes for all Articles
app.route("/articles")
    .get(function(req, res) {
        // Read
        Article.find({}, function(err, results) {
            if (!err) {
                res.send(results);
            } else {
                res.send(err);
            }
        });
    })

.post(function(req, res) {
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });
    newArticle.save(function(err) {
        if (!err) {
            res.send("Added A new Article");
        } else {
            res.send("Error Occured: " + err);
        }
    });
})

.delete(function(req, res) {
    Article.deleteMany({}, function(err) {
        if (!err) {
            res.send("All items are deleted");
        } else {
            res.send(err);
        }
    });
});

// Server Routes for a specific article
app.route("/articles/:specificArticleName")
    .get(function(req, res) {
        Article.findOne({ title: req.params.specificArticleName }, function(err, results) {
            if (results) {
                res.send(results);
            } else {
                res.send(err);
            }
        });
    })

.put(function(req, res) {
    Article.update({ title: req.params.specificArticleName }, { title: req.body.title, content: req.body.content }, { overwrite: true },
        function(err) {
            if (!err) {
                res.send("Updated Succesfuly");
            } else {
                res.send(err);
            }
        });
})

.patch(function(req, res) {
    Article.update({ title: req.params.specificArticleName }, { $set: req.body }, function(err) {
        if (!err) {
            res.send("Updated successfuly");
        } else {
            res.send(err);
        }
    });
})

.delete(function(req, res) {
    Article.deleteOne({ title: req.params.specificArticleName }, function(err) {
        if (!err) {
            res.send("Deleted this article");
        } else {
            res.send(err);
        }
    });
});

app.listen(4000, function() {
    console.log("Server is up and running on port 4000");
});