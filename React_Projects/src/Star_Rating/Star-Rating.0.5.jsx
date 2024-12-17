import { useState } from "react";
import blackStar from './assets/black-star.png';
import yellowStar from './assets/yellow-star.png';
const StarRatingEx05 = () => {
    const [rate, setRate]=useState(0)
    const [hover, setHover]=useState(0)

    const SetRating = (star) =>{
        setRate(star)
    } 

    const hoverRating = (star) =>{
        setHover(star)
    }

    const eliminateRating = () =>{
        setHover(0)
    }

    return(<div>
        {[...Array(6)].map((_,index) => {
            return(<div
            onClick={() => SetRating(index)}
            onMouseEnter={() => hoverRating}
            oneMouseLeave={eliminateRating}
            >
                <img
                src={index (rate || hover) ? yellowStar : blackStar}
                />
            </div>)
        })}
    </div>)
}

export default StarRatingEx05