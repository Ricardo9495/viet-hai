'use client'

import { Box, Button, Container, Grid, Typography, Divider} from '@mui/material';
import * as React from 'react';
import ImageSlider from '../components/ImageSlider';
import ToolBar from '@/app/components/ToolBar';
import Footer from '@/app/components/Footer';
import AppBar from '@/app/components/AppBar';
import theme from '@/theme';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import { useRouter } from 'next/navigation'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


const useStyles = makeStyles({
  button: {
    backgroundColor: 'transparent',
    border: 2,
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
  divider: {
    width: '4rem',
  },
});


const Page = () => {
  const classes = useStyles();
  const router = useRouter();

  const handleClick = () => {
    router.push("/cong-trinh");
  };

  return (
    <main>
      <AppBar />
      <div>
        <ToolBar/>
      </div>
      {/* Body */}
        <Container fixed sx={{ marginTop: 5 }}>
          <Typography variant='h5' component="div" align="left" color='#FF0D09'>
            SẢN PHẨM
          </Typography>
          <br/>
          <Divider variant='fullWidth' className={classes.divider} sx={{ backgroundColor: theme.palette.primary.main, borderBottomWidth: 3 }}/>
          <br/>
          <br/>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={4} key={1}>
              <Item>
                <Image src="/images/800_5157-min.png"
                height={300}
                width={340}
                quality={100}
                alt="Picture of the author"
                />
                <div>
                  <br/>
                  <Typography variant='h6' component="div" align="left" sx={{ color: theme.palette.primary.main }}>
                    Kết cấu thép block, chi tiết tàu
                  </Typography>
                  <br/>
                  <Typography variant='subtitle2' component="div" align="left">
                    Công ty cổ phần Việt Hải chuyên sản xuất kết cấu thép block, chi tiết tàu
                  </Typography>
                  <br/>
                  <div>
                    <Button variant="contained" className={classes.button} size='medium' onClick={() => handleClick()}>
                      Xem tất cả
                    </Button>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={2}>
              <Item>
                <Image src="/images/dam-cau-truc.png"
                height={300}
                width={340}
                quality={100}
                alt="Picture of the author"
                />
                <div>
                  <br/>
                  <Typography variant='h6' component="div" align="left" sx={{ color: theme.palette.primary.main }}>
                    Kết cấu thép các loại dầm cầu trục
                  </Typography>
                  <br/>
                  <Typography variant='subtitle2' component="div" align="left">
                    Công ty cổ phần Việt Hải chuyên sản xuất kết cấu thép các loại dầm cầu trục
                  </Typography>
                  <br/>
                  <div>
                    <Button variant="contained" className={classes.button} size='medium' onClick={() => handleClick()}>
                      Xem tất cả
                    </Button>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={3}>
              <Item>
                <Image src="/images/dam-cau-truc.png"
                height={300}
                width={340}
                quality={100}
                alt="Picture of the author"
                />
                <div>
                  <br/>
                  <Typography variant='h6' component="div" align="left" sx={{ color: theme.palette.primary.main }}>
                    Kết cấu thép các loại dầm cầu trục
                  </Typography>
                  <br/>
                  <Typography variant='subtitle2' component="div" align="left">
                    Công ty cổ phần Việt Hải chuyên sản xuất kết cấu thép các loại dầm cầu trục
                  </Typography>
                  <br/>
                  <div>
                    <Button variant="contained" className={classes.button} size='medium' onClick={() => handleClick()}>
                      Xem tất cả
                    </Button>
                  </div>
                </div>
              </Item>
            </Grid>
        </Grid>
      </Container>
      <Footer />
    </main>
  );
}


export default Page;