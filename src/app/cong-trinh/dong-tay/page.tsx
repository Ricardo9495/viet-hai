'use client'

import { Box, Button, Container, Divider, Typography } from '@mui/material';
import * as React from 'react';
import ImageSlider from '../../components/ImageSlider';
import ToolBar from '@/app/components/ToolBar';
import Footer from '@/app/components/Footer';
import AppBar from '@/app/components/AppBar';
import theme from '@/theme';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';


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

const contents: BannerContent[] = [
  {
    imgSrc: '/images/dong-tay-1.png',
    title: 'Dong Tay',
  },
  {
    imgSrc: '/images/dong-tay-2.png',
    title: 'Dong Tay',
  },
  {
    imgSrc: '/images/dong-tay-3.png',
    title: 'Dong Tay',
  },
  {
    imgSrc: '/images/dong-tay-4.png',
    title: 'Dong Tay',
  },
  {
    imgSrc: '/images/dong-tay-6.png',
    title: 'Dong Tay',
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
            DỰ ÁN: CẢI TẠO HÀNH LANG KINH TẾ ĐÔNG TÂY 2 - MYANMA
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
          <ImageSlider contents={contents} key='hoa-phat'/>
        </Container>
      </div>
      <Footer />
    </main>
  )
}


export default Page;