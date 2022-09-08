//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruits", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Is A Required Field"],
    },

    rating: {
        type: Number,
        min: 1,
        max: 10,
    },

    review: String,

    class: Number,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const pineApple = new Fruit({
    name: "PineApple",
    rating: 10,
    review: "peaches are so yummy",
});

const mooz = new Fruit({
    name: "mooz",
    rating: 6,
    review: "mooz y3ny banana",
});

// mooz.save();
//pineApple.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Amy",
    age: 26,
    favFruit: pineApple,
});

//person.save();

Person.updateOne({ name: "John" }, { favFruit: mooz }, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("John's data updated");
    }
});

Fruit.find(function(err, callItAnyThingYouWantFruits) {
    if (err) {
        console.log(err);
    } else {
        // console.log(callItAnyThingYouWantFruits);

        mongoose.connection.close();

        callItAnyThingYouWantFruits.forEach(function(fruits) {
            console.log("name: " + fruits.name);
        });
    }
});

// Fruit.update({ _id: "5f76365cc591d309f4476738" }, { name: "Peach" }, function(
//     err
// ) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Data Successfuly Updated");
//     }
// }); // smae as updateOne

// Fruit.deleteOne({ _id: "5f76365cc591d309f4476738" }, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Data Successfuly Deleted");
//     }
// });

// Person.deleteMany({ name: "John" }, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("All Data Are Deleted In this Collection");
//     }
// });

// const kiwi = new Fruit({
//     name: "kiwi",
//     rating: 3,
//     review: "sda",
// });

// const mango = new Fruit({
//     name: "mango",
//     rating: 3,
//     review: "sda",
// });

// const banana = new Fruit({
//     name: "banana",
//     rating: 3,
//     review: "sda",
// });

// Fruit.insertMany([kiwi, mango, banana], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Success");
//     }
// });