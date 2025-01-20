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
import SpreadOperaotr from "./mastering-updater-function/mastering-spread-operator/spread-operaotr-0.1.jsx";
import LoadData from "./load_more_items/load-mor-data.jsx";
import GetData from "./load_more_items/load-mor-data.jsx";
import LoadData01 from "./load_more_items/load-more-data.0.1.jsx";
import LoadMoreCripto from "./load_more_items/Load_more.jsx";
import ModalTest from "./custom-modal-popup/modal-test.jsx";
import WeatherApp from "./weather-app/weather-app.jsx";
import ScrollTopBottom from "./scroll-to-top-and-bottom/scroll-top-bottom.jsx";
import LightAndDarkMode from "./light-and-dark-mode/light-dark-mode.jsx";

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
      {/*<UpdaterFunction/>*/}


     {/*<LoadMoreCripto/>*/}
    {/*<WeatherApp/>*/}
   

   <LightAndDarkMode/>
    </>
  );
}

export default App;
