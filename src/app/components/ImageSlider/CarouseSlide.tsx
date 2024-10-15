import React from "react";
import { useRef, useEffect } from "react";
import { Card, Typography,CardMedia } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Image from 'next/image'
import { Fab } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const useStyles = makeStyles({
  card: {
    borderRadius: 5,
    width: "100%",
    // height: "70vh",
    color: "black"
  },
  img: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  slider: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

const CarouselSlide = ({ content }: { content: any }) => {
  const { imgSrc, title } = content;
  const classes = useStyles();
  const autoPlayRef = useRef();

  // useEffect(() => {
  //   const play = () => {
  //     autoPlayRef.current()
  //   }

  //   const interval = setInterval(play, autoPlay * 1000)
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <Card className={classes.card}>
      {/* <Fab
      style={{
        padding: "2em",
        backgroundColor: "unset",
        boxShadow: "unset",
        border: "1px solid",
        position: "absolute",
      }}
      // onClick={handleClick}
    >
      <ArrowForwardIosIcon />
    </Fab> */}
      <CardMedia className={classes.img} component="img" image={content.imgSrc}/>
    </Card>
  );
};

export default CarouselSlide;
