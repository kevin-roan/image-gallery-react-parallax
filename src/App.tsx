import { ImageSlider } from "./components";

const App = () => {
  const images = [
    "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1429567/pexels-photo-1429567.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1227497/pexels-photo-1227497.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div>
      <h1>React Image Slider</h1>
      <ImageSlider images={images} />
    </div>
  );
};

export default App;
