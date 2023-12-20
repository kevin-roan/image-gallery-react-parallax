import React, { useState } from "react";
import "./ImageSliderCard.scss";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

const MAX_VISIBILITY = 3;

const Card = ({ title, imageUrl }) => (
  <div className="card">
    <h2>{title}</h2>
    <img src={imageUrl} alt={title} />
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  return (
    <div className="carousel">
      {active > 0 && (
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            "pointer-events": active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {React.cloneElement(child, { key: i, index: i })}
        </div>
      ))}
      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

const ImageSliderCard = ({ images }) => {
  return (
    <div className="app">
      <Carousel>
        {images.map((imageUrl, i) => (
          <Card key={i} title={"Image " + (i + 1)} imageUrl={imageUrl} />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSliderCard;
