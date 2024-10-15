
import * as React from 'react';
import Image from "next/image";
import theme from '@/theme';
import { makeStyles } from '@mui/styles';
import { Paper, Typography, Divider, Grid, Container } from '@mui/material';

const useStyles = makeStyles({
  footer: {
    display: 'flex',
    marginTop: 10,
    marginBottom: 10,
    backgroundImage: 'url(/images/Group-22-min-1-2.jpg)'  ,
    minHeight: 'auto',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: theme.palette.primary.light,
    '& > *': {
      padding: 40,
      width: '100%',
      height: '100%',
      color: theme.palette.primary.light,
    }
  },
  divider: {
    width: '6rem',
  },
  bgcolor: {
    backgroundColor: 'rgba(28, 36, 91, 0.9)'
  }
});


const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.bgcolor}>
      <Container fixed sx={{ marginTop: 2 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={8}>
                <Grid key={1} item>
                  <Typography variant='h5' component="div" align="left">
                    Công ty cổ phần Việt Hải
                  </Typography>
                  <br/>
                  <Divider variant='fullWidth' className={classes.divider} sx={{ backgroundColor: theme.palette.primary.light, borderBottomWidth: 2}}/>
                  <br/>
                  <Typography variant='subtitle2' component="div" align="left">
                    Địa chỉ ĐKKD: Số 100, Nguyễn Lương Bằng
                  </Typography>
                  <Typography variant='subtitle2' component="div" align="left">
                    quận Kiến An, thành phố Hải Phòng
                  </Typography>
                  <br/>
                  <Typography variant='subtitle2' component="div" align="left">
                    Địa chỉ ĐKKD: Km 35, quốc lộ 10, xã Quốc Tuấn
                  </Typography>
                  <Typography variant='subtitle2' component="div" align="left">
                    huyện An Lão, thành phố Hải Phòng
                  </Typography>
                  <br/>
                  <Typography variant='subtitle2' component="div" align="left">
                    Số điện thoại: (84-225)3525.195 - 3824.823-3824.282
                  </Typography>
                  <br/>
                  <Typography variant='subtitle2' component="div" align="left">
                    Email: info@lilama69-2.com.vn
                  </Typography>
                  <br/>
                  <Typography variant='subtitle2' component="div" align="left">
                    Fax: (84-225) 3824.562
                  </Typography>
                </Grid>
                <Grid key={2} item>
                    <Typography variant='h5' component="div" align="left">
                      Sản Phẩm
                    </Typography>
                    <br/>
                    <Divider variant='fullWidth' className={classes.divider} sx={{ backgroundColor: theme.palette.primary.light, borderBottomWidth: 2}}/>
                    <br/>
                    <Typography variant='subtitle2' component="div" align="left">
                      Cầu Trục
                    </Typography>
                    <br/>
                    <Typography variant='subtitle2' component="div" align="left">
                      Băng Tải
                    </Typography>
                    <br/>
                    <Typography variant='subtitle2' component="div" align="left">
                      Bồn bể
                    </Typography>
                    <br/>
                    <Typography variant='subtitle2' component="div" align="left">
                    Lắp đặt bao hơi
                    </Typography>
                    <br/>
                    <Typography variant='subtitle2' component="div" align="left">
                      Thiết bị lọc bụi
                    </Typography>
                </Grid>
                <Grid key={3} item>
                  <Typography variant='h5' component="div" align="left">
                    Bản Đồ
                  </Typography>
                  <br/>
                  <Divider variant='fullWidth' className={classes.divider} sx={{ backgroundColor: theme.palette.primary.light, borderBottomWidth: 2}}/>
                  <br/>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.7745436101686!2d106.6249558125275!3d20.800407080712308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a772ca6a839b3%3A0x8a7c42af972710aa!2zMTAwIE5ndXnhu4VuIEzGsMahbmcgQuG6sW5nLCBQaMO5IExp4buFbiwgS2nhur9uIEFuLCBI4bqjaSBQaMOybmcsIFZpZXRuYW0!5e0!3m2!1sen!2sjp!4v1728864749335!5m2!1sen!2sjp"
                    width="300"
                    height="250"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      </Container>
      </div>
    </div>
  );
}


export default Footer;
