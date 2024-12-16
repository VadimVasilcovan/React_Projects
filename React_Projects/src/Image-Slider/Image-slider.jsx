import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./image-slider.css";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch images from the API
  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImage(data);
      }
    } catch (e) {
      setErrorMsg(e.message);
    } finally {
      setLoading(false); // Ensure loading stops
    }
  }

  // Handlers for previous and next buttons
  const handleprevious = () => {
    setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1);
  };

  // Fetch images when the component mounts or when dependencies change
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url, page, limit]); // Added `page` and `limit` dependencies

  // Show loading or error messages
  if (loading) {
    return <div>Loading data! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occurred! {errorMsg}</div>;
  }

  // Render the image slider
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handleprevious}
        className="arrow arrow-left"
      />
      {image && image.length
        ? image.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {image && image.length
          ? image.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
