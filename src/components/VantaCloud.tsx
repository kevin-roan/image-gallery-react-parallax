import { useEffect } from "react";
import "./VantaClouds.scss";
import CLOUDS from "vanta/src/vanta.clouds";

const VantaClouds = () => {
  useEffect(() => {
    const cloudsEffect = CLOUDS({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      skyColor: 0x4e585e,
      cloudColor: 0x000000,
      sunColor: 0x000000,
      sunGlareColor: 0x272d7f,
      sunlightColor: 0x2eeeff,
    });

    return () => {
      if (cloudsEffect) {
        cloudsEffect.destroy();
      }
    };
  }, []);

  return <div className="halo-background" id="vanta"></div>;
};

export default VantaClouds;
