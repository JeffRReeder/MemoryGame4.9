const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let numClicked = 0;
// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target.className);
  console.log("your class list is: ", event.target.classList);
  

    // to keep from clicking more than 2 cards at a time
    if(numClicked < 2 ){
      // clicking on card should change background color to be color of it's class.
      event.target.style.backgroundColor = event.target.className;

      // check 1st className vs 2nd className (aka a match)

      numClicked++;
      console.log('If num clicked is: ' + numClicked);
      console.log(event.target.className);
    
      
    } else{
      numClicked = 0;
      console.log(' ELSE numclick set to zero?: ' + numClicked);
    }
    
    console.log(' AFTER if num click total is: ' + numClicked);
  
  

  // Users should only be able to change at most 2 cards at a time.
  // Clicking on 2 matching cars is a "Match" - those cards stay face up.
  // if event.target.className of 1 === of 2nd, then leave these divs alone, otherwise change them back to normal state.


  // when clicking 2 cards that are NOT a match, they should stay turned over for at least 1 second before they hide color again.
  // Use a 'setTimeout' so that you can execute code after 1 second.
}

// when the DOM loads
createDivsForColors(shuffledColors);
