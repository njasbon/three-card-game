import React from 'react';

let back = "https://i.pinimg.com/originals/11/cc/92/11cc9271a79487fd9d3afa714fa9cf9b.jpg"        
let king = "https://i.pinimg.com/originals/12/f7/a4/12f7a4211bbbbae45ffa90de88e20b40.png"        
let queen = "https://i.pinimg.com/originals/64/fe/3a/64fe3aaedd0cd7e7a89f15127bbcc3f4.png"
let faces = {back: back, king: king, queen: queen}
//keys in objects are strings.
const randomizeCards = () => {
    Math.ceil(Math.random()*3)
  }

function Cards(props){
    let firstCard = props.cardOrder[0]
    let secondCard = props.cardOrder[1]
    let thirdCard = props.cardOrder[2]

    return(
        <div className="card-table">
            <div className = "card"> 
               <img src={faces[firstCard]} />
            </div>
            <div className = "card">
               <img src={faces[secondCard]} />
            </div>
            <div className = "card">
              <img src={faces[thirdCard]} />
            </div>
        </div>
    )
}


export default Cards;