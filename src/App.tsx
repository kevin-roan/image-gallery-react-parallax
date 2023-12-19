import { useRef } from "react";
import { TextTyper, ImageSlider } from "./components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1793525/pexels-photo-1793525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=600')`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          <ImageSlider images={images} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <div className="greeting_contianer">
            <TextTyper />
          </div>
        </ParallaxLayer>
      </Parallax>{" "}
    </div>
  );
}

export default App;

const images = [
  "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1429567/pexels-photo-1429567.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1227497/pexels-photo-1227497.jpeg?auto=compress&cs=tinysrgb&w=600",
];
