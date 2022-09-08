//jshint esversion:6

//Refacored Code
exports.getDate = function() {
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };

    return today.toLocaleDateString("en-US", options);
};

//not refactored code
module.exports.getDay = getDay;

function getDay() {
    let today = new Date();

    let options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-US", options);
}