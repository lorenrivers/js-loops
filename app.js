console.log("Hello world!");

for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

let videoGames = [
  "baldurs gate",
  "fox hole",
  "elden ring",
  "league of legends",
  "snake",
];

for (let i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

// let keepLooping = true;
// let i = 0;

// while (keepLooping === true) {
//   console.log("Iteration", i);
//   keepLooping = Math.random() < 0.1;
//   i++;
// }

const favFood = ["cheesy garlic bread", "malteasers", "cheesecake"];

for (let i = 0; i < favFood.length; i++) {
  console.log(favFood[i]);
}

const favAnimals = ["tiger", "dog", "elephant", "bear", "red panda"];

for (let animal of favAnimals) {
  console.log(animal);
}

const favColours = ["orange", "red", "pink", "coral"];

favColours.forEach(function (oneColour) {
  console.log(oneColour);
});

const favNumbers = [4, 7, 9];
let i = 0;

while (i < favNumbers.length) {
  console.log(favNumbers[i]);
  i++;
}
