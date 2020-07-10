import React from 'react';

let back = "https://i.pinimg.com/originals/11/cc/92/11cc9271a79487fd9d3afa714fa9cf9b.jpg"        
let king = "https://i.pinimg.com/originals/12/f7/a4/12f7a4211bbbbae45ffa90de88e20b40.png"        
let queen = "https://i.pinimg.com/originals/64/fe/3a/64fe3aaedd0cd7e7a89f15127bbcc3f4.png"
let faces = {back: back, king: king, queen: queen}
//keys in objects are strings.
//how are we going to flip the cards? - us onClick to flip the cards.
//how do we keep track of which cards are flipped?

const randomizeCards = () => {
    Math.ceil(Math.random()*3)
  }

function Cards(props){
//card is an element from the old array cards

    let images = props.cardOrder.map((card, i, cards) => (
        <div className="card" key={i}> <img src={faces[card]}/>

        </div>
    ))

    return(
        <div className="card-table">
            {images}
        </div>
    )
}


export default Cards;