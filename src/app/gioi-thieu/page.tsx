'use client'

import * as React from 'react';
import AppBar from '@/app/components/AppBar';
import ImageSlider from '@/app/components/ImageSlider';
import Image from "next/image";
import ToolBar from '@/app/components/ToolBar';
import { Container, Grid, Paper, Typography, Divider, Button } from '@mui/material';
import theme from '@/theme';
import { makeStyles } from '@mui/styles';
import Certification from '../components/Certification';
import Footer from '../components/Footer';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#fff',
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
  introImage: {
    display: 'flex',
    backgroundImage: 'url(/images/800_5157-min.png)',
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
});

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
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={6} key={1}>
              <Paper elevation={0} >
                <div>
                <Typography variant='h5' component="div" align="left" color='#FF0D09'>
                  Công ty Cổ phần Công Nghiệp Việt Hải
                </Typography>
                <br/>
                <Divider variant='fullWidth' className={classes.divider} sx={{ backgroundColor: theme.palette.primary.main, borderBottomWidth: 3 }}/>
                <br/>
                <Typography variant='subtitle2' component="div" align="left">
                  Công ty Cổ phần Công nghiệp Việt Hải, có trụ sở tại Hải Phòng, Việt Nam, với niềm tự hào kế thừa toàn bộ hệ thống quản trị và nhân sự từ Lilama. Chúng tôi xây dựng trên nền tảng này và tiến hành cách làm mới một cách mạnh mẽ, nhằm nâng cao hiệu quả hoạt động và đáp ứng tốt hơn nhu cầu thị trường hiện đại.
                </Typography>
                <br/>
                <Typography variant='subtitle2' component="div" align="left">
                    Được thành lập bởi những thành viên từ Lilama, với đam mê và nhiệt huyết dành cho ngành đầu tư và xây dựng, cùng với nhiều kinh nghiệm 
                    trong quản lý và điều hành các dự án lớn, Việt Hải đã từng bước xây dựng nên một Công ty ngày càng lớn mạnh, vững chắc. Chúng tôi cam kết 
                    phát triển và cải tiến liên tục để mang lại giá trị tốt nhất cho Quý khách hàng...
                </Typography>
                </div>
                <br/>
                <div>
                  <Button variant="contained" color="primary" size='small'>
                    Xem Thêm
                  </Button>
                </div>
              </Paper>
            
            </Grid>
            {/* Image */}
            <Grid item xs={2} sm={4} md={6} key={2}>
              <div>
                <Image src="/images/800_5157-min.png" 
                  height={320}
                  width={500}
                  quality={100}
                  alt="Picture of the author"
                />
              </div>
            </Grid>
          </Grid>
          {/* tam nhin | Su Menh*/}
          <Container fixed sx={{ paddingTop: 10 }}className={classes.container}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={2} sm={4} md={6} key={1}>
                <Typography variant='h5' component="div" align="left" color='#FF0D09'>
                  Tầm Nhìn
                </Typography>
                <br/>
                <Divider variant='fullWidth' className={classes.divider} sx={{ backgroundColor: theme.palette.primary.main, borderBottomWidth: 3 }}/>
                <br/>
                <Typography variant='subtitle2' component="div" align="left">
                  Trở thành một doanh nghiệp hàng đầu trong lĩnh vực đầu tư, xây dựng các công trình công nghiệp, 
                  năng lượng và đóng tàu tại Việt Nam, với sự hiện diện và uy tín vượt trội trên thị trường quốc tế.
                </Typography>
              </Grid>
              <Grid item xs={2} sm={4} md={6} key={2}>
                <Typography variant='h5' component="div" align="left" color='#FF0D09'>
                  Sứ Mệnh
                </Typography>
                <br/>
                <Divider variant='fullWidth' className={classes.divider} sx={{ backgroundColor: theme.palette.primary.main, borderBottomWidth: 3 }}/>
                <br/>
                <Typography variant='subtitle2' component="div" align="left">
                  Nỗ lực liên tục nâng cao chất lượng và tiến độ hoàn thành các dự án xây dựng, đáp ứng mọi yêu cầu của Chủ 
                  đầu tư và tuân thủ nghiêm các quy định pháp luật. Đồng thời, phát triển và duy trì một môi trường làm việc 
                  chuyên nghiệp, năng động, nơi mà tài năng có thể phát triển và góp phần vào sự thành công chung của công ty.
                </Typography>
              </Grid>
            </Grid>
          </Container>
          {/* Gia tri cot loi*/}
          <Container fixed sx={{ paddingTop: 10 }}className={classes.container}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={2} sm={4} md={6} key={1}>
                <Typography variant='h5' component="div" align="left" color='#FF0D09'>
                  Giá Trị Cốt Lõi
                </Typography>
                <br/>
                <Divider variant='fullWidth' className={classes.divider} sx={{ backgroundColor: theme.palette.primary.main, borderBottomWidth: 3 }}/>
                <br/>
                <Typography variant='subtitle2' component="div" align="left">
                  Chất lượng: Cam kết cung cấp sản phẩm và dịch vụ chất lượng cao, đáp ứng mọi yêu cầu của khách hàng. 
                  Sáng tạo và đổi mới: Luôn luôn đổi mới và áp dụng các công nghệ tiên tiến nhất để cải thiện hiệu quả công việc và giá trị gia tăng cho khách hàng. 
                </Typography>
                <br/>
                <Typography variant='subtitle2' component="div" align="left">
                  Cam kết và trách nhiệm: Đặt trách nhiệm và cam kết cao nhất đối với sự thành công của dự án và sự hài 
                  lòng của khách hàng.
                </Typography>
                <br/>
                <Typography variant='subtitle2' component="div" align="left">
                  Phát triển bền vững: Xây dựng một môi trường làm việc bền vững, 
                  tôn trọng mọi giá trị con người và môi trường tự nhiên. 
                </Typography>
                <br/>
                <Typography variant='subtitle2' component="div" align="left">
                  Tích cực và nhiệt huyết: Đam mê công việc, luôn cống hiến hết mình và 
                  thúc đẩy sự phát triển cá nhân và tổ chức.
                </Typography>
                <br/>
                <Typography variant='subtitle2' component="div" align="left">
                  Những giá trị này không chỉ giúp xây dựng nền tảng vững chắc cho 
                  Công ty Việt Hải mà còn là nền tảng để từng bước thực hiện tầm nhìn và sứ mệnh dài hạn 
                  của công ty trong thị trường cạnh tranh khốc liệt hiện nay.
                </Typography>
              </Grid>
              {/* Image */}
              <Grid item xs={2} sm={4} md={6} key={2} sx={{ padding: '100px'}}>
                <Image src="/images/cot-loi.png" 
                  height={320}
                  width={400}
                  quality={100}
                  alt="Picture of the author"
                />
            </Grid>
            </Grid>
          </Container>
        </Container>
        {/* certification */}
        <Certification />
      </div>
      <Footer />
    </main>
  )
}

export default Page;
