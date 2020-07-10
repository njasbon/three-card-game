import React, {useState} from 'react';
import './App.css';
import Cards from './Cards.js';



function App() {
  const [cards, setCards] = useState(["queen", "king", "queen"]);


  return (
    <div className="App">
      <h1>Hey Class! Let's make this three card game!</h1>
      <button>Start over/ Randomize</button>
      <Cards cardOrder={cards} />
    </div>
  );
}

export default App;
