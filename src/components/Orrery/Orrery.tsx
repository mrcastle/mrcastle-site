import { ReactP5Wrapper } from "@p5-wrapper/react";

import { sketch } from "../../assets/sketches/planets";
import { useEffect, useState } from "react";

import "./Orrery.css";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function Orrery() {
  const { height, width } = useWindowDimensions();

  return (
    <ReactP5Wrapper sketch={sketch} windowHeight={height} windowWidth={width} />
  );
}

export default Orrery;
