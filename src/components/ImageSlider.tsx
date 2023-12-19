import { useState } from "react";
import "./ImageSlider.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="image-slider">
      <button onClick={prevImage}>
        <FaArrowLeft />
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
      <button onClick={nextImage}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ImageSlider;
