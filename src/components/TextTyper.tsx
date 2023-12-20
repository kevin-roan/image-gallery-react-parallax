import { TypeAnimation } from "react-type-animation";

const TextTyper = () => {
  return (
    <TypeAnimation
      sequence={[
        2000,
        "Space Gallery",
        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{
        fontSize: "4vmax",
        display: "inline-block",
        color: "white",
        padding: "2rem",
      }}
    />
  );
};

export default TextTyper;
