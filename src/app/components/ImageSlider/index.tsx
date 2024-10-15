import { Box, Container, Slide } from "@mui/material";
import Arrow from "./Arrow";
import { makeStyles } from '@mui/styles';
import { useState } from "react";
import CarouselSlide from "./CarouseSlide";

const useStyles = makeStyles({
  sliderWrapper: {
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    maxHeight: "700px",
  },
  slider: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  wrapper: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "100%",
  },
});

interface ImageSliderProps {
  contents: BannerContent[];

}

const ImageSlider = (prop: ImageSliderProps) => {
  const { contents } = prop;
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | "down" | "up" >("down");
  const [index, setIndex] = useState(0);
  const content = contents[index];
  const numSlides = contents.length;
  const classes = useStyles();

  const onArrowClick = (direction: "left" | "right") => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    const oppDirection = direction === "left" ? "right" : "left";
    setSlideDirection(direction);
    setSlideIn(false);
  
    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };

  return (
    <div className={classes.sliderWrapper}>
      <Box className={classes.wrapper}>
        <Arrow left={true} right={false} handleClick={() => onArrowClick("left")} />
        {/* <Slide in={false} > */}
        
        <Slide in={slideIn} direction={slideDirection}>
        
          <div>
            <CarouselSlide content={content} />
          </div>
        </Slide>
        <Arrow left={false} right={true} handleClick={() => onArrowClick("right")} />
      </Box>
    {/* <Dots content={contents} index={index} /> */}
    </div>
  )

}

export default ImageSlider;