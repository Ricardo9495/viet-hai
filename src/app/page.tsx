'use client'

import * as React from 'react';
import Image from "next/image";
import { styled } from '@mui/material/styles';
import AppBar from "./components/AppBar";
import ImageSlider from "./components/ImageSlider";
import ToolBar from "./components/ToolBar";
import Paper from '@mui/material/Paper';
import { Button, Container, Divider, Grid, Typography, colors } from "@mui/material";
import theme from '@/theme';
import NewsTab from './components/ProductsTab';
import Certification from './components/Certification';
import Footer from './components/Footer';
import { makeStyles } from '@mui/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
  Container: {
    marginTop: 5,
  },
  hiddenBorderItem: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  divider: {
    width: '4rem',
  },
  title: {
    color: theme.palette.primary.main,
  },
  date: {
    color: theme.palette.secondary.main
  },
  certification: {
    display: 'flex',
    marginTop: 10,
    marginBottom: 10,
    backgroundImage: 'url(/images/Group-403-min.jpg)',
    minHeight: 'auto',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    '& > *': {
      padding: 40,
      width: '100%',
      height: '100%',
      color: theme.palette.primary.light,
    },
  },
  new: {
    marginTop: 15,
    alignItems: 'center',
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <main>
      <AppBar />
      <div>
        <ToolBar/>
      </div>
      {/* Body */}
      {/* Event */}
      <div >
        <Container fixed sx={{ marginTop: 5 }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={4} key={1}>
              <Item className={classes.hiddenBorderItem}>
                <Typography variant='h5' component="div" align="left" color='#FF0D09'>
                  SỰ KIỆN NỔI BẬT
                </Typography>
                <br/>
                <Divider variant='fullWidth' className={classes.divider} sx={{ backgroundColor: theme.palette.primary.main, borderBottomWidth: 3 }}/>
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={2}>
            <Item className={classes.hiddenBorderItem}>
                <Typography variant="overline" component="div" align="left" color='#171717' fontSize={10}>
                  Với hơn 50 năm thành lập, CÔNG TY CỔ PHẦN LILAMA 
                  69-2 hoạt động chủ yếu trong các lĩnh vực:
                </Typography>
              </Item>
              <br/>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={3}>
              <Item className={classes.hiddenBorderItem}>
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={4}>
              <Item>
                <Typography variant="subtitle2" component="div" align="left" className={classes.title}>
                  Lilama 69-2 báo cáo quản trị 6 tháng đầu năm 2024
                </Typography>
                <Typography variant="caption" component="div" align="left" className={classes.date}>
                  30 Tháng Bảy, 2024
                </Typography>
                <Divider variant='fullWidth' className={classes.divider}/>
                <Typography variant="caption" component="div" align="left">
                  [...]
                </Typography>
                <br/>
                <div>
                  <Button variant="contained" color="primary" size='small'>
                    Xem Thêm
                  </Button>
                </div>
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={5}>
              <Item>
                <Typography variant="subtitle2"component="div" align="left" className={classes.title}>
                  Lilama 69-2 báo cáo quản trị 6 tháng đầu năm 2024
                </Typography>
                <Typography variant="caption" component="div" align="left" className={classes.date}>
                  30 Tháng Bảy, 2024
                </Typography>
                <Divider variant='fullWidth' className={classes.divider}/>
                <Typography variant="caption" component="div" align="left">
                  [...]
                </Typography>
                <br/>
                <Button variant="contained" color="primary" size='small'>
                  Xem Thêm
                </Button>
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={6}>
              <Item>
                <Typography variant="subtitle2"component="div" align="left" className={classes.title}>
                  Lilama 69-2 báo cáo quản trị 6 tháng đầu năm 2024
                </Typography>
                <Typography variant="caption" component="div" align="left" className={classes.date}>
                  30 Tháng Bảy, 2024
                </Typography>
                <Divider variant='fullWidth' className={classes.divider}/>
                <Typography variant="caption" component="div" align="left">
                  [...]
                </Typography>
                <br/>
                <Button variant="contained" color="primary" size='small'>
                  Xem Thêm
                </Button>
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={7}>
              <Item>
                <Typography variant="subtitle2"component="div" align="left" className={classes.title}>
                  Lilama 69-2 báo cáo quản trị 6 tháng đầu năm 2024
                </Typography>
                <Typography variant="caption" component="div" align="left" className={classes.date}>
                  30 Tháng Bảy, 2024
                </Typography>
                <Divider variant='fullWidth' className={classes.divider}/>
                <Typography variant="caption" component="div" align="left">
                  [...]
                </Typography>
                <br/>
                <Button variant="contained" color="primary" size='small'>
                  Xem Thêm
                </Button>
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={8}>
              <Item>
                <Typography variant="subtitle2"component="div" align="left" className={classes.title}>
                  Lilama 69-2 báo cáo quản trị 6 tháng đầu năm 2024
                </Typography>
                <Typography variant="caption" component="div" align="left" className={classes.date}>
                  30 Tháng Bảy, 2024
                </Typography>
                <Divider variant='fullWidth' className={classes.divider}/>
                <Typography variant="caption" component="div" align="left">
                  [...]
                </Typography>
                <br/>
                <Button variant="contained" color="primary" size='small'>
                  Xem Thêm
                </Button>
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={9}>
              <Item>
                <Typography variant="subtitle2" component="div" align="left" className={classes.title}>
                  Lilama 69-2 báo cáo quản trị 6 tháng đầu năm 2024
                </Typography>
                <Typography variant="caption" component="div" align="left" className={classes.date}>
                  30 Tháng Bảy, 2024
                </Typography>
                <Divider variant='fullWidth' className={classes.divider}/>
                <Typography variant="caption" component="div" align="left">
                  [...]
                </Typography>
                <br/>
                <Button variant="contained" color="primary" size='small'>
                  Xem Thêm
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* Certification */}
      <Certification />
      {/* News */}
      <div className={classes.new} key={'newsTab'}>
        <NewsTab key={'newsTab'}/>
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}
