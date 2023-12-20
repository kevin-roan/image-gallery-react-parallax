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
            <ImageSliderCard />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
