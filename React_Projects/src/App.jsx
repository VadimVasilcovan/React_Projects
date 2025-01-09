import "./App.css";
import ImageSlider from "./Image-Slider/Image-slider";
import RandomColorGenerator from "./Random_Color_Generator/Color_Generator,";
import RatingStarex03 from "./Star_Rating/Star-Ratings.0.3";
import StarRating from "./Star_Rating/Star_Rating";
import StarRatingEx from "./Star_Rating/Star_Rating.0.2";
import RatingStarEx04 from "./Star_Rating/Star_Rating.0.4";
import TreeView from "./Tree-view/tree-view";
import ImportMoreItems from "./load_more_items/load_more_items";
import menus from "./Tree-view/data";
import MasteringMapMethod from "./mastering-map/mastering-map-01";
import data from "./mastering-map/data.jsx";
import MasteringMap03 from "./mastering-map/masternig-map-03.jsx";
import UpdaterFunction from "./mastering-updater-function/updater-function.jsx";

function App() {
  return (
    <>
      {/*<RatingStarex03 numberOfStars={3}/>*/}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"10"}
      />*/}

      {/*<RatingStarEx04 numberOfStars={8}/>*/}

      {/*Load more products components*/}
      {/*<ImportMoreItems/>*/}

      {/*Tree view compinent*/}
      {/*<TreeView menus={menus}/>*/}

      {/*<MasteringMap03 data={data}/>*/}
      <UpdaterFunction/>
    </>
  );
}

export default App;
