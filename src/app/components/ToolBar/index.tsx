'use client'

import { AppBar, Container, Toolbar, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Image1 from "../../../../public/images/Group-9-min-1.png";
import Image2 from "../../../../public/images/Group-13-min-1.png";
import Image3 from "../../../../public/images/Group-15-min.png";
import { makeStyles } from "@material-ui/core";
import ImageSlider from "../ImageSlider";


const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: 60,
    width: 240,
    backgroundColor:'transparent',
    border: 1,
    borderColor: 'red',
  },
  pagerImage: {
    backgroundColor:'transparent',
    margin: 2,
    padding: 10,
  }
});

const contents: BannerContent[] = [
  {
    imgSrc: "/images/Mask-Group-22-min.jpg",
    title: "First Slide",
  },
  {
    imgSrc: "/images/Group-22-min-1-2.jpg",
    title: "Second Slide",
  },
  {
    imgSrc: "/images/Group-319-min.jpg",
    title: "Third Slide",
  }
]

const ToolBar = () => {
  const classes = useStyles();
  return (
    <div>
      <ImageSlider contents={contents} key='tool-bar'/>
       <Grid sx={{ flexGrow: 1 }} container spacing={2} bgcolor='#1C245B'>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={8}>
            <Grid key={1} item>
              <Paper className={classes.root}>
                <Paper className={classes.pagerImage}>
                  <Image height={32} width={40} src={Image1} alt="Picture of the author" priority />
                </Paper>
                <Paper className={classes.pagerImage}>
                <Typography variant="subtitle2" component="div" color="white">
                      1500 CNNV
                  </Typography>
                  <Typography variant="subtitle2" component="div" color="white">
                    Quy mô nhân sự
                  </Typography>
                </Paper>
              </Paper>
            </Grid>
            <Grid key={2} item>
              <Paper className={classes.root}>
                <Paper className={classes.pagerImage}>
                  <Image height={30} width={27} src={Image2} alt="Picture of the author" priority />
                </Paper>
                <Paper className={classes.pagerImage}>
                  <Typography variant="subtitle2" component="div" color="white">
                      Phần thưởng
                  </Typography>
                  <Typography variant="subtitle2" component="div" color="white">
                      Huân chương lao động
                  </Typography>
                </Paper>
              </Paper>
            </Grid>
            <Grid key={3} item>
              <Paper className={classes.root}>
                <Paper className={classes.pagerImage}>
                  <Image height={36} width={37} src={Image3} alt="Picture of the author" priority />
                </Paper>
                <Paper className={classes.pagerImage}>
                <Typography variant="subtitle2" component="div" color="white">
                      60 năm
                  </Typography>
                  <Typography variant="subtitle2" component="div" color="white">
                    Số năm hoạt động
                  </Typography>
                </Paper>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
   
  )
}

export default ToolBar;