//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// todolistDB?retryWrites=true&w=majority/
// The Mongoose DataBase
mongoose.connect(
    "mongodb+srv://omaar_5:x.16technomusic@cluster0.n7axe.mongodb.net/todolistDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
);

const itemsSchema = new mongoose.Schema({
    name: String,
});

const Item = new mongoose.model("item", itemsSchema);

const defaultItem1 = new Item({
    name: "Welcome to My To-Do List",
});

const defaultItem2 = new Item({
    name: "Hit the + button to adda new item",
});

const defaultItem3 = new Item({
    name: "<-- Hit this to delete an Item",
});

const defaultItems = [defaultItem1, defaultItem2, defaultItem3];

//list schema

const listSchema = {
    name: String,
    items: [itemsSchema],
};

const List = new mongoose.model("list", listSchema);

// Server Routes
app.get("/", function(req, res) {
    Item.find({}, function(err, foundItems) {
        //{} to find all the items
        if (foundItems.length === 0) {
            Item.insertMany(defaultItems, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Items Added Successfully");
                }
            });
            // res.redirect("/");
        } else {
            res.render("list", { listTitle: "Today", newListItems: foundItems });
        }
    });
});

app.post("/", function(req, res) {
    const itemName = req.body.newItem;
    const listName = req.body.listbtn;

    const item = new Item({
        name: itemName,
    });

    if (listName === "Today") {
        item.save();
        res.redirect("/");
    } else {
        List.findOne({ name: listName }, function(err, foundList) {
            foundList.items.push(item);
            foundList.save();
            res.redirect("/" + listName);
        });
    }
});

app.post("/delete", function(req, res) {
    const checkedItemID = req.body.checkBox;
    const listName = req.body.listName;

    if (listName === "Today") {
        Item.findByIdAndRemove(checkedItemID, function(err) {
            if (!err) {
                console.log("Item Deleted");
                res.redirect("/");
            }
        });
    } else {
        List.findOneAndUpdate({ name: listName }, { $pull: { items: { _id: checkedItemID } } },
            function(err, foundList) {
                if (!err) {
                    res.redirect("/" + listName);
                }
            }
        );
    }
});

// app.get("/work", function(req, res) {
//     res.render("list", { listTitle: "Work List", newListItems: workItems });
// });

app.get("/:customListName", function(req, res) {
    const customListName = _.capitalize(req.params.customListName);

    List.findOne({ name: customListName }, function(err, foundList) {
        if (!err) {
            if (!foundList) {
                // Create New List
                const list = new List({
                    name: customListName,
                    items: defaultItems,
                });
                list.save();
                res.redirect("/" + customListName);
            } else {
                //Show Existing List
                res.render("list", {
                    listTitle: foundList.name,
                    newListItems: foundList.items,
                });
            }
        }
    });
});

app.get("/about", function(req, res) {
    res.render("about");
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 7000;
}
app.listen(port, function() {
    console.log("Server is up and running on port 7000");
});

// app.listen(7000, function() {
//     console.log("Server started on port 7000");
// });