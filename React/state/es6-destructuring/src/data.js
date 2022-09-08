const animals = [
  {
    name: "cat", sound: "meow", feed: {
      food: "2 times",
      water: "3 times"
    }
  },
  { name: "dog", sound: "woof" }
];

function useAnimals(animal) {
  return [animal.name,
  function () {
    console.log(animal.sound);
  }
  ];
}

export default animals;
export { useAnimals };