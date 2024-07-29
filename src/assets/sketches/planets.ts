import { Sketch, SketchProps } from "@p5-wrapper/react";
import { CelestialBody } from "../../components/Orrery/Orrery";

type OrrerySketchProps = {
  windowHeight: number;
  windowWidth: number;
  celestialBodies: CelestialBody[];
};

type MySketchProps = SketchProps & OrrerySketchProps;

export const sketch: Sketch<MySketchProps> = (p5) => {
  function generateCelestialGraphics(
    celestialBodies: CelestialBody[],
    parent?: CelestialGraphic
  ): CelestialGraphic[] {
    let graphics: CelestialGraphic[] = [];

    for (let i = 0; i < celestialBodies.length; i++) {
      let celestialBody = celestialBodies[i];
      const { radius, distance, color, satellites, days, showOrbitalPath } =
        celestialBody;

      const graphic = new CelestialGraphic(
        radius,
        distance,
        parent ?? null,
        days,
        p5.color(color.r, color.g, color.b, color.a ?? null),
        showOrbitalPath ?? false
      );
      graphics.push(graphic);

      if (satellites) {
        graphics = graphics.concat(
          generateCelestialGraphics(satellites, graphic)
        );
      }
    }

    return graphics;
  }
  let centerX: number;
  let centerY: number;

  let celestialGraphics: CelestialGraphic[] = [];

  let { innerWidth: canvasWidth, innerHeight: canvasHeight } = window;

  p5.setup = () => {
    p5.createCanvas(canvasWidth, canvasHeight);

    centerX = p5.width / 2;
    centerY = 0;
  };

  p5.updateWithProps = ({
    windowHeight,
    windowWidth,
    celestialBodies,
  }: OrrerySketchProps) => {
    if (celestialBodies) {
      celestialGraphics = generateCelestialGraphics(celestialBodies);
    }

    if (windowHeight !== canvasHeight || windowWidth !== canvasWidth) {
      p5.resizeCanvas(windowWidth, windowHeight);
      canvasWidth = windowWidth;
      canvasHeight = windowHeight;

      centerX = p5.width / 2;
    }
  };

  p5.draw = () => {
    p5.clear();
    p5.background(15, 23, 42, 0);

    for (let i = 0; i < celestialGraphics.length; i++) {
      let celestialBody = celestialGraphics[i];

      celestialBody.display();
      celestialBody.move();
    }
  };

  class CelestialGraphic {
    diameter: number;
    distance: number;
    parent: CelestialGraphic | null;
    days: number;
    color: any; //p5 color()

    currentX: number;
    currentY: number;
    degrees: number;
    step: number;
    showOrbitalPath: boolean;

    constructor(
      diameter: number,
      distance: number,
      parent: CelestialGraphic | null,
      days: number,
      color: any,
      showOrbitalPath?: boolean
    ) {
      this.diameter = diameter;
      this.showOrbitalPath = showOrbitalPath ?? false;

      if (parent) {
        this.distance = distance + parent.diameter / 2;

        this.currentX = parent.currentX + this.distance;
        this.currentY = parent.currentY + this.distance;
      } else {
        this.currentX = centerX;
        this.currentY = centerY;
        this.distance = distance;
      }
      this.parent = parent;
      this.days = days;

      this.degrees = 90;
      //the ten is a modifier on the speed
      this.step = 360 / (this.days * 10);

      this.color = color;
    }

    move() {
      if (this.parent !== null) {
        if (this.degrees < 360) {
          this.degrees += this.step;
        } else {
          this.degrees = this.degrees - 360;
        }

        //orbit around the parent
        this.currentX =
          this.parent.currentX +
          this.distance * p5.cos(p5.radians(this.degrees));
        this.currentY =
          this.parent.currentY +
          this.distance * p5.sin(p5.radians(this.degrees));
      } else {
        this.currentX = centerX;
        this.currentY = centerY;
      }
    }

    display() {
      //add the orbital path
      if (this.showOrbitalPath && this.parent !== null) {
        p5.noFill();
        p5.stroke(74, 222, 128, 100);

        p5.circle(
          this.parent.currentX,
          this.parent.currentY,
          p5.dist(
            this.parent.currentX,
            this.parent.currentY,
            this.currentX,
            this.currentY
          ) * 2
        );
      }

      //display the celestial body
      if (this.color) {
        p5.fill(this.color);
      }
      p5.noStroke();
      p5.circle(this.currentX, this.currentY, this.diameter);
    }
  }
};
