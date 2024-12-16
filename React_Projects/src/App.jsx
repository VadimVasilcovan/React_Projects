import "./App.css";
import ImageSlider from "./Image-Slider/Image-slider";
import RandomColorGenerator from "./Random_Color_Generator/Color_Generator,";
import RatingStarex03 from "./Star_Rating/Star-Ratings.0.3";
import StarRating from "./Star_Rating/Star_Rating";
import StarRatingEx from "./Star_Rating/Star_Rating.0.2";

function App() {
  return (
    <>
      {/*<RatingStarex03 numberOfStars={3}/>*/}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"10"}
      />
    </>
  );
}

export default App;
