const gameContainer = document.getElementById("game");
let card1 = null;
let card2 = null;
let cardCount = 0;
let stopClicking = false;



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
  let currentCard = event.target;

  // card1 + card2 already selected, don't let user click anything more. Ref line 102
  if(stopClicking === true){
    return;
  }
  // if you have already flipped something, don't do anything (until they click something else) 
  if(currentCard.classList.contains("flipped")){
    console.log('you have clicked already!!!!!!!');
    return;
  }

  
  
  // 1. on click chnage bg color
  currentCard.style.backgroundColor = currentCard.classList[0];

  // 1st run no cards assigned
  if(!card1 || !card2){
    // add class "flipped" to whoever
    currentCard.classList.add("flipped");
    // set card1 to currentCard or itself
    card1 = card1 || currentCard;
    if (currentCard === card1){
      card2 = null;
    } else {
      card2 = currentCard;
    }
  }

  // prevent user from clicking more than 2 cards
  // compare cards, if same remove event listener
  if(card1 && card2){
    stopClicking = true;
    // cards are a match
    if (card1.classList[0] === card2.classList[0]){
      cardCount += 2;
      console.log("card cound is: ",cardCount);
      // stop looking for clicks on these cards
      card1.removeEventListener("click", handleCardClick);
      card2.removeEventListener("click", handleCardClick);
      // reset values for next round or choices
      card1 = null;
      card2 = null;
      stopClicking = false;
      
    } else {
      // not a match
      setTimeout(function(){
        // removed class flipped
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        // set background color to default
        card1.style.backgroundColor = '';
        card2.style.backgroundColor = '';
        // reset values for next round or choices
        card1 = null;
        card2 = null;
        stopClicking = false;
      },1000);  
    }
    // game is complete, so reset game
    if(cardCount === COLORS.length){
      alert("all done");
      //const button = document.createElement('button[type="submit"]');
      
    }
  }


  console.log(cardCount, card1, card2);

  // 2. add class flipped
  //event.target.classList.add('flipped');
 
  // 2nd click change bg color, add class of 'flopped' , save card 2
  // compare cards
  // if match, change class from flipped to done
  // if not match, call setTimeout and remove class of 'flipped', and clear card1/card2

  // Users should only be able to change at most 2 cards at a time.
  // Clicking on 2 matching cars is a "Match" - those cards stay face up.
  // if event.target.className of 1 === of 2nd, then leave these divs alone, otherwise change them back to normal state.


  // when clicking 2 cards that are NOT a match, they should stay turned over for at least 1 second before they hide color again.
  // Use a 'setTimeout' so that you can execute code after 1 second.
}

// when the DOM loads
createDivsForColors(shuffledColors);
