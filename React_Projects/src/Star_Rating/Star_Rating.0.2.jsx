import { useState } from "react";
import blackStar from './assets/black-star.png';
import yellowStar from './assets/yellow-star.png';
import './Star_Rating.css'

const StarRatingEx = ({numberOfStars}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (getCurentIndex) => {
        setRating(getCurentIndex);
    };

    const handleMouseEnter = (getCurentIndex) => {
        setHover(getCurentIndex);
    };

    const handleMouseLeave = () => {
        setHover(0);
    };

    return (
        <div className="star-rating-ex">
            {[...Array(numberOfStars)].map((_, index) => {
                

                return (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img className="star-rating-img"
                            src={index <= (hover || rating) ? yellowStar : blackStar}
                            alt={index <= (hover || rating) ? "Yellow Star" : "Black Star"}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default StarRatingEx;
