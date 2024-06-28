import { Sketch, SketchProps } from "@p5-wrapper/react";

type MySketchProps = SketchProps & {
  canvasHeight: number;
  canvasWidth: number;
};

export const sketch: Sketch<MySketchProps> = (p5) => {
  let centerX: number;
  let centerY: number;
  let sizeOfSun = 200;

  let celestialBodies: Celestial[] = [];

  //let canvasWidth = 1800;
  //let canvasHeight = 1080;

  let { innerWidth: canvasWidth, innerHeight: canvasHeight } = window;

  p5.setup = () => {
    p5.createCanvas(canvasWidth, canvasHeight);

    centerX = p5.width / 2;
    centerY = 0;
    let mercury = new Celestial(30, 50, null, 88, p5.color(41, 37, 36));
    let venus = new Celestial(50, 140, null, 200, p5.color(230, 230, 230));
    let earth = new Celestial(53, 260, null, 300, p5.color(47, 78, 106));
    let luna = new Celestial(12, 8, earth, 30, p5.color(246, 241, 213));
    let mars = new Celestial(32, 390, null, 500, p5.color(153, 61, 0));
    let jupiter = new Celestial(150, 500, null, 1000, p5.color(176, 127, 53));
    let saturn = new Celestial(125, 700, null, 2500, p5.color(176, 143, 54));
    let uranus = new Celestial(100, 875, null, 3500, p5.color(54, 104, 150));
    let neptune = new Celestial(100, 1050, null, 4000, p5.color(85, 128, 170));

    celestialBodies = [
      mercury,
      venus,
      earth,
      mars,
      jupiter,
      saturn,
      luna,
      uranus,
      neptune,
    ];
  };

  // p5.updateWithProps = ({
  //   windowHeight,
  //   windowWidth,
  // }: {
  //   windowHeight: number;
  //   windowWidth: number;
  // }) => {
  //   if (windowHeight !== canvasHeight || windowWidth !== canvasWidth) {
  //     p5.resizeCanvas(windowWidth, windowHeight);
  //     canvasWidth = windowWidth;
  //     canvasHeight = windowHeight;
  //   }
  // };

  p5.draw = () => {
    p5.clear();
    p5.background(15, 23, 42, 0);

    //add the sun
    p5.fill(p5.color(250, 204, 21));
    p5.circle(centerX, centerY, sizeOfSun);

    for (let i = 0; i < celestialBodies.length; i++) {
      let celestialBody = celestialBodies[i];

      celestialBody.display();
      celestialBody.move();
    }
  };

  class Celestial {
    diameter: number;
    distance: number;
    parent: Celestial | null;
    days: number;
    color: any; //p5 color()

    currentX: number;
    currentY: number;
    degrees: number;
    step: number;

    constructor(
      diameter: number,
      distance: number,
      parent: Celestial | null,
      days: number,
      color: any
    ) {
      this.diameter = diameter;

      if (parent) {
        this.distance = distance + parent.diameter / 2;

        this.currentX = parent.currentX + this.distance;
        this.currentY = parent.currentY + this.distance;
      } else {
        //account for the radius of the sun
        this.distance = distance + this.diameter / 2 + sizeOfSun / 2;

        this.currentX = centerX;
        this.currentY = centerY + this.distance;
      }
      this.parent = parent;
      this.days = days;

      this.degrees = 90;
      this.step = 360 / (this.days * 10);

      this.color = color;
    }

    move() {
      if (this.degrees < 360) {
        this.degrees += this.step;
      } else {
        this.degrees = this.degrees - 360;
      }

      if (this.parent !== null) {
        //orbit around the parent
        this.currentX =
          this.parent.currentX +
          this.distance * p5.cos(p5.radians(this.degrees));
        this.currentY =
          this.parent.currentY +
          this.distance * p5.sin(p5.radians(this.degrees));
      } else {
        //orbit around the center
        this.currentX =
          centerX + this.distance * p5.cos(p5.radians(this.degrees));
        this.currentY =
          centerY + this.distance * p5.sin(p5.radians(this.degrees));
      }
    }

    display() {
      //add the orbital path if celestial has no parent object
      if (!this.parent) {
        p5.noFill();
        p5.stroke(251, 215, 56, 100);

        p5.circle(
          centerX,
          centerY,
          p5.dist(centerX, centerY, this.currentX, this.currentY) * 2
        );
      }

      if (this.color) {
        p5.fill(this.color);
      }
      p5.noStroke();
      p5.circle(this.currentX, this.currentY, this.diameter);
    }
  }
};
