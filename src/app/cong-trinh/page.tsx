'use client'

import { Box, Button, Container, Grid, Typography, Divider } from '@mui/material';
import * as React from 'react';
import ImageSlider from '../components/ImageSlider';
import ToolBar from '@/app/components/ToolBar';
import Footer from '@/app/components/Footer';
import AppBar from '@/app/components/AppBar';
import theme from '@/theme';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core';
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
  const router = useRouter()

  const handleClick = (url: string) => {
    let redirectUrl = "http://localhost:3000/cong-trinh/" + url
    console.log("redirectUrl", redirectUrl)
    router.push(redirectUrl)
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
            CÔNG TRÌNH
          </Typography>
          <br/>
          <Divider variant='fullWidth' className={classes.divider} sx={{ backgroundColor: theme.palette.primary.main, borderBottomWidth: 3 }}/>
          <br/>
          <br/>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={4} key={1}>
              <Item>
                <Image src="/images/hoa-phat-1.png"
                height={300}
                width={340}
                quality={100}
                alt="Picture of the author"
                />
                <div>
                  <br/>
                  <Typography variant='h6' component="div" align="left" sx={{ color: theme.palette.primary.main }}>
                    Nhà máy thép Hòa Phát - Dung Quất
                  </Typography>
                  <br/>
                  <Typography variant='subtitle2' component="div" align="left">
                    Gia công kết cấu thép hệ dầm sàn – khung vượt nhịp
                  </Typography>
                  <br/>
                  <div>
                    <Button variant="contained" className={classes.button} size='medium' onClick={() => handleClick("/hoa-phat")}>
                      Xem tất cả
                    </Button>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={2}>
              <Item>
                <Image src="/images/dong-tay-1.png"
                height={300}
                width={340}
                quality={100}
                alt="Picture of the author"
                />
                <div>
                  <br/>
                  <Typography variant='h6' component="div" align="left" sx={{ color: theme.palette.primary.main }}>
                    Cải tạo hành lang kinh tế Đông Tây 2 - Myanma
                  </Typography>
                  <br/>
                  <Typography variant='subtitle2' component="div" align="left">
                    Chế tạo kết cấu thép
                  </Typography>
                  <br/>
                  <div>
                    <Button variant="contained" className={classes.button} size='medium' onClick={() => handleClick("/dong-tay")}>
                      Xem tất cả
                    </Button>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={3}>
              <Item>
                <Image src="/images/bimexco-1.png"
                height={300}
                width={340}
                quality={100}
                alt="Picture of the author"
                />
                <div>
                  <br/>
                  <Typography variant='h6' component="div" align="left" sx={{ color: theme.palette.primary.main }}>
                    BIMEXCO EC - NAM CẦU KIỀN
                  </Typography>
                  <br/>
                  <Typography variant='subtitle2' component="div" align="left">
                    Chế tạo kết cấu thép
                  </Typography>
                  <br/>
                  <div>
                    <Button variant="contained" className={classes.button} size='medium' onClick={() => handleClick("/bimexco")}>
                      Xem tất cả
                    </Button>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={4}>
              <Item>
                <Image src="/images/bon-tron-1.png"
                height={300}
                width={340}
                quality={100}
                alt="Picture of the author"
                />
                <div>
                  <br/>
                  <Typography variant='h6' component="div" align="left" sx={{ color: theme.palette.primary.main }}>
                    Bồn trộn bê tông
                  </Typography>
                  <br/>
                  <Typography variant='subtitle2' component="div" align="left">
                    Chế tạo bồn trộn ô tô
                  </Typography>
                  <br/>
                  <div>
                    <Button variant="contained" className={classes.button} size='medium' onClick={() => handleClick("/bon-tron")}>
                      Xem tất cả
                    </Button>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key={5}>
              <Item>
                <Image src="/images/vung-ang-1.png"
                height={300}
                width={340}
                quality={100}
                alt="Picture of the author"
                />
                <div>
                  <br/>
                  <Typography variant='h6' component="div" align="left" sx={{ color: theme.palette.primary.main }}>
                    Nhà máy nhiệt điện Vũng Áng 2
                  </Typography>
                  <br/>
                  <Typography variant='subtitle2' component="div" align="left">
                    Chế tạo lọc bụi tĩnh điện
                  </Typography>
                  <br/>
                  <div>
                    <Button variant="contained" className={classes.button} size='medium' onClick={() => handleClick("/vung-ang-2")}>
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