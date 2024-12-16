import { useState } from "react";
import blackStar from './assets/black-star.png'
import yellowStar from './assets/yellow-star.png'


const RatingStarEx04 = ({numberOfStars}) => {
const [rating, setrating]=useState(0)
const [hover, setHover]=useState(0)

const setRating = (handleRating) => {
    setrating(handleRating)
}

const hoverRating = (handleRating) => {
    setHover(handleRating)
}

const leaveMouse =() => {
    setHover(0)
}

return(<div>
    {[...Array(numberOfStars)].map((_, index) => {
        index +=1;

        return(<div
        key={index}
        onClick={() => setRating(index)}
        onMouseEnter={() => hoverRating(index)}
        onMouseLeave={leaveMouse}
        >
            <img className="image-holder"
            src={index <= (hover || rating) ? yellowStar : blackStar}
            />
        </div>)
    })}
</div>)
}

export default RatingStarEx04