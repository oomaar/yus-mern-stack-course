// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

// Hold the items of the array cars
const [honda, tesla] = cars;

// Nested Object
const { speedStats: { topSpeed: teslaTopSpeed } } = tesla;
const { speedStats: { topSpeed: hondaTopSpeed } } = honda;

// // Nested Array
// const [hondaTopColour] = honda.coloursByPopularity;
// const [teslaTopColour] = tesla.coloursByPopularity;

// Another way for the nested array
const { coloursByPopularity: [hondaTopColour] } = honda;
const { coloursByPopularity: [teslaTopColour] } = tesla;

// Messing Out with the code !
const [teslaWhiteColor] = tesla.coloursByPopularity[1];

ReactDOM.render(
    <table>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
            <th>Color</th>
            <th> {teslaWhiteColor} </th>
        </tr>
        <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
        </tr>
    </table>,
    document.getElementById("root")
);


// import animals, { useAnimals } from "./data";

// // Destructing Arrays
// // console.log(animals);
// const [c, d] = animals;
// // console.log(c);

// //somthing like useState
// console.log(useAnimals(c));

// const [animal, makeSound] = useAnimals(c);
// console.log(animal);
// console.log(makeSound());

// // Destructing Objects
// // const { name: catName, sound: catSound } = c;
// // console.log(catSound);

// // const { namee = "fluffy", sound = "Purr" } = c;
// // console.log(namee);

// // const { name, sound, feed: { food, water } } = c;
// // console.log(feed.food);
// //Altrnative: after adding feed: { food, water }
// // console.log(water);
