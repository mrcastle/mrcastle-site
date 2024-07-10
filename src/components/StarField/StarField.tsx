import classNames from "classnames/bind";

import styles from "./StarField.module.css";

const cx = classNames.bind(styles);

//get random position between 1 - 100;
function randomPosition(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

type StarClass = "star1" | "star2" | "star3" | "star4" | "star5" | "star6";

type Star = {
  top: number;
  left: number;
  size: number;
  starClass: StarClass;
};

function generateStars(): Star[] {
  const sizes = [1, 1, 2, 3, 4];
  const starClassNames: StarClass[] = [
    "star1",
    "star2",
    "star3",
    "star4",
    "star5",
    "star6",
  ];

  const stars: Star[] = [];
  for (let i = 0; i < 300; i++) {
    const top = randomPosition(1, 100);
    const left = randomPosition(1, 100);

    const randomSize = Math.floor(Math.random() * sizes.length);
    const size = sizes[randomSize];

    const randomStarClass = Math.floor(Math.random() * starClassNames.length);
    const starClass = starClassNames[randomStarClass];

    stars.push({ top, left, size, starClass });
  }
  return stars;
}

function StarField() {
  const stars = generateStars();

  return (
    <div className={styles.light}>
      {stars.map((star, index) => {
        const { top, left, size, starClass } = star;

        const className = cx({
          "star-base": true,
          [starClass]: true,
        });

        return (
          <div
            className={className}
            key={`star-${index}`}
            style={{
              top: `${top}%`,
              left: `${left}%`,
              height: `${size}px`,
              width: `${size}px`,
            }}
          />
        );
      })}
    </div>
  );
}

export default StarField;
