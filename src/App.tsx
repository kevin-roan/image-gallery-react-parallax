import React from "react";
import { TextTyper, ImageSliderCard, VantaClouds } from "./components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";

function App() {
  return (
    <div>
      <Parallax pages={3}>
        <VantaClouds />
        <ParallaxLayer offset={0.4} speed={0.05}>
          <div className="greeting_contianer">
            <TextTyper />
          </div>
          <h3 style={{ color: "white", padding: "2rem", textAlign: "center" }}>
            Website Made with Three.js | React
          </h3>
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.05}
          sticky={{ start: 1.2, end: 2 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            height: "100%",
          }}
        >
          <div className="imageslider_contianer">
            <ImageSliderCard images={images} />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;

const images = [
  "https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/207529/pexels-photo-207529.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/176851/pexels-photo-176851.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/813269/pexels-photo-813269.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3805983/pexels-photo-3805983.jpeg?auto=compress&cs=tinysrgb&w=600",
];
