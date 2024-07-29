import { ReactP5Wrapper } from "@p5-wrapper/react";

import { sketch } from "../../assets/sketches/planets";
import { useWindowDimensions } from "../../hooks/window";

import "./Orrery.css";

export type CelestialBody = {
  name: string;
  radius: number;
  distance: number;
  satellites: CelestialBody[] | null;
  days: number;
  color: RGBA;
  showOrbitalPath?: boolean;
};

type RGBA = {
  r: number;
  g: number;
  b: number;
  a?: number;
};

const celestialBodyData: CelestialBody[] = [
  {
    name: "Sol",
    color: { r: 250, g: 204, b: 21 },
    radius: 200,
    distance: 0,
    days: 0,
    satellites: [
      {
        name: "Mercury",
        color: { r: 51, g: 47, b: 46 },
        radius: 30,
        distance: 50,
        days: 88,
        showOrbitalPath: true,
        satellites: null,
      },
      {
        name: "Venus",
        color: { r: 230, g: 230, b: 230 },
        radius: 50,
        distance: 140,
        days: 200,
        showOrbitalPath: true,
        satellites: null,
      },
      {
        name: "Earth",
        color: { r: 47, g: 78, b: 106 },
        radius: 53,
        distance: 260,
        days: 365,
        showOrbitalPath: true,
        satellites: [
          {
            name: "Luna",
            radius: 12,
            distance: 8,
            days: 30,
            color: { r: 246, g: 241, b: 213 },
            satellites: null,
          },
        ],
      },
      {
        name: "Mars",
        color: { r: 153, g: 61, b: 0 },
        radius: 32,
        distance: 390,
        days: 500,
        showOrbitalPath: true,
        satellites: null,
      },
      {
        name: "Jupiter",
        color: { r: 176, g: 127, b: 53 },
        radius: 150,
        distance: 550,
        days: 1000,
        showOrbitalPath: true,
        satellites: null,
      },
      {
        name: "Saturn",
        color: { r: 176, g: 143, b: 54 },
        radius: 125,
        distance: 750,
        days: 2500,
        showOrbitalPath: true,
        satellites: null,
      },
      {
        name: "Uranus",
        color: { r: 54, g: 104, b: 150 },
        radius: 100,
        distance: 900,
        days: 3500,
        showOrbitalPath: true,
        satellites: null,
      },
      {
        name: "Neptune",
        color: { r: 85, g: 128, b: 170 },
        radius: 100,
        distance: 1050,
        days: 4000,
        showOrbitalPath: true,
        satellites: null,
      },
    ],
  },
];

function Orrery() {
  const { height, width } = useWindowDimensions();

  return (
    <ReactP5Wrapper
      sketch={sketch}
      windowHeight={height}
      windowWidth={width}
      celestialBodies={celestialBodyData}
    />
  );
}

export default Orrery;
