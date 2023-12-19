import { TypeAnimation } from "react-type-animation";

const TextTyper = () => {
  return (
    <TypeAnimation
      sequence={[
        "Welcome ",
        1000,
        "To",
        2000,
        "React Parallax Image Gallery",
        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{
        fontSize: "10rem",
        display: "inline-block",
        color: "white",
        padding: "2rem",
      }}
    />
  );
};

export default TextTyper;
