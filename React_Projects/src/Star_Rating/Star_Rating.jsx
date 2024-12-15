import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../Star_Rating/Star_Rating.css'

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
    console.log('Rating set to:', getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
    console.log('Hovering over star:', getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(0);
    console.log('Mouse left stars.');
  };

  return (
    <>
      <div className="star-rating">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;

          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? 'active' : 'inactive'}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              size={40}
             
            />
          );
        })}
      </div>
    </>
  );
};

export default StarRating;
