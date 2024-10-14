'use client'

import { Box, Button, Container, Divider, Typography } from '@mui/material';
import * as React from 'react';
import ImageSlider from '../../components/ImageSlider';
import ToolBar from '@/app/components/ToolBar';
import Footer from '@/app/components/Footer';
import AppBar from '@/app/components/AppBar';
import theme from '@/theme';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  container: {
    backgroundColor: '#fff',
  },
  divider: {
    width: '10rem',
    backgroundColor: theme.palette.primary.main,
    borderBottomWidth: 3
  },
});

const hoaPhatImages: BannerContent[] = [
  {
    imgSrc: '/images/hoa-phat-1.png',
    title: 'Hoa Phat',
  },
  {
    imgSrc: '/images/hoa-phat-2.png',
    title: 'Hoa Phat',
  },
  {
    imgSrc: '/images/hoa-phat-3.png',
    title: 'Hoa Phat',
  },
  {
    imgSrc: '/images/hoa-phat-4.png',
    title: 'Hoa Phat',
  },
  {
    imgSrc: '/images/hoa-phat-6.png',
    title: 'Hoa Phat',
  },
];

const Page = () => {
  const classes = useStyles();
  return (
    <main>
      <AppBar />
      <div>
        <ToolBar/>
      </div>
      {/* Body */}
      <div>
        <Container fixed sx={{ paddingTop: 10 }} className={classes.container}>
          <Typography variant='h5' component="div" align="left" color='#FF0D09'>
            DỰ ÁN: NHÀ MÁY THÉP HÒA PHÁT - DUNG QUẤT
          </Typography>
          <br/>
          <Divider variant='fullWidth' className={classes.divider}/>
          <br/>
          <Typography variant='h6' component="div" align="left" color={ theme.palette.primary.main}>
            CHẾ TẠO KẾT CẤU THÉP 
          </Typography>
          <br/>
          <Typography variant='h6' component="div" align="left" color={ theme.palette.primary.main}>
            Thư viện ảnh
          </Typography>
          <br/>
          <Divider variant='fullWidth' className={classes.divider}/>
          <br/>
          <ImageSlider contents={hoaPhatImages} key='hoa-phat'/>
        </Container>
      </div>
      <Footer />
    </main>
  )
}


export default Page;