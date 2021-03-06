import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";

import firstFrame from "../../image/2/page3-1.png";
import secondFrame from "../../image/2/page3-2.png";
import thirdFrame from "../../image/2/page3-3.png";
import fourthFrame from "../../image/2/page3-4.png";
import fifthFrame from "../../image/2/page3-5.png";
import sixthFrame from "../../image/2/page3-6.png";

const frames = [
  firstFrame,
  secondFrame,
  thirdFrame,
  fourthFrame,
  fifthFrame,
  sixthFrame,
];

const FrameButtonUI = ({ handleButtonClick, setFadeState }) => {
  const classes = useStyles();

  const [styles, set] = useSpring(() => ({
    width: window.innerWidth / 2,
    height: window.innerHeight / 2.5,
    transform: "perspective(500px) rotateY(0deg)",
    boxShadow: "5px 5px 15px grey",
  }));

  // frame 들의 기울기 최대를 15deg로 제한
  const limit = (value, clampAt = 15) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? limit(event.delta[0]) : 0
      }deg)`,
      boxShadow: 20,
    });
  });

  return (
    <Box className={classes.pictureContainer} {...bind()}>
      {frames.map((src, index) => {
        return (
          <animated.img
            className={classes.picture}
            src={src}
            key={src.substring(35, 38)}
            style={{
              ...styles,
            }}
            onClick={() => {
              handleButtonClick(index + 1, 1200);
              setFadeState(false);
              setTimeout(() => {
                setFadeState(true);
              }, 1200);
            }}
          />
        );
      })}
    </Box>
  );
};

const useStyles = makeStyles({
  pictureContainer: {
    display: "flex",
    width: "100%",
    height: window.innerHeight * 0.5,
    alignItems: "center",
    overflowX: "scroll",
  },
  picture: {
    marginLeft: "5%",
    backgroundSize: "cover",
    backgroundRepeat: "no - repeat",
    backgroundPosition: "center",
  },
});

export default FrameButtonUI;
