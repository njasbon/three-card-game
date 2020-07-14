import React, {useState} from 'react';
import './App.css';
import Cards from './Cards.js';

//Am I a king or queen? Am I face down or face up?

function App() {
  const [cards, setCards] = useState([
    {face: 'queen', faceDown: true}, 
    {face: 'king', faceDown: true}, 
    {face: 'queen', faceDown: true}]);
  const [faceDown, setFaceDown] = useState(["back", "back", "back"]);
  //the first issue we had was that the arrays were not being updated. 
  const flip = function(i) {
    let cardsCopy = cards.slice()
    if(cards[i].faceDown){
      cardsCopy[i].faceDown = false
      setCards(cardsCopy)
    }

  }
  //card is an object, it is a list of objects inside of cards.
  const allFaceDown = function(){
    let cardsCopy = cards.slice()
    cardsCopy.forEach(card => card.faceDown = true)
    setCards(cardsCopy)
    shuffle()
  }

  const shuffle = function(){
    let newHand = cards.slice()
    newHand.sort(() => Math.random() - 0.5)
    setCards(newHand)
    
    //we need to make the current state of the cards array switch/shuffle order.
    //how do you shuffle the order of elements within an array?
  }
  
  return (
    <div className="App">
      <h1>Hey Class! Let's make this three card game!</h1>
      <button onClick={shuffle} >Start over/ Randomize</button>
      <Cards cardOrder={cards} flipper={flip}/>
    </div>
  );
}

export default App;
