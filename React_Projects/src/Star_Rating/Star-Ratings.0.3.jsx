import React from "react";
import { useState } from "react";
import blackStar from './assets/black-star.png'
import yellowStar from './assets/yellow-star.png'
import './Star_Rating.css'

const RatingStarex03 = ({numberOfStars}) => {
const [rating, setrating]= useState(0)
const [hover, setHover]= useState(0)


const mouseClick = (starChange) => {
    setrating(starChange)
}

const mouseEnter = (starChange) => {
    setHover(starChange)
}

const MouseLeave = () => {
    setHover(0)
}


    return(<div className="star-rating-ex" >
        {[...Array(numberOfStars)].map((_, index) =>{
            index +=1

            return(
                <img  className="star-rating-img"
                src={index <= (hover || rating) ? yellowStar : blackStar}
                key={index}
                onClick={() => mouseClick(index)}
                onMouseEnter={() => mouseEnter(index)}
                onMouseLeave={MouseLeave}
               />
            );
        })}
   

    
    

    </div>)

}

export default RatingStarex03