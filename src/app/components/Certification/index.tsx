
import * as React from 'react';
import Image from "next/image";
import { Paper, Typography, Divider, Button } from '@mui/material';
import theme from '@/theme';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  certification: {
    display: 'flex',
    marginTop: 10,
    marginBottom: 10,
    backgroundImage: 'url(/images/Group-403-min.jpg)'  ,
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
    width: '4rem',
  },
});

const Certification = () => {
  const classes = useStyles();
  return (
    <div className={classes.certification}>
        <Paper variant="outlined" sx={{ backgroundColor: 'transparent' }}/>
        <Paper variant="outlined" square sx={{ backgroundColor: 'rgba(28, 36, 91, 0.8)' }}>
          <div>
            <Typography variant='h5' component="div" align="left">
              CHỨNG CHỈ
            </Typography>
            <br/>
            <Divider variant='fullWidth' className={classes.divider} sx={{ backgroundColor: theme.palette.primary.light, borderBottomWidth: 2}}/>
            <br/>
            <Typography variant='subtitle2' component="div" align="left">
              Chính sách quản lí chất lượng sẽ được Công ty Lilama 69-2 áp dụng theo tiêu chuẩn quốc tế ISO 9001: 2008.
            </Typography>
            <br/>
            <Typography variant='subtitle2' component="div" align="left">
              Chính sách quản lí chất lượng của Công ty Lilama 69-2 dựa trên yếu tố cơ bản và có giá trị phục vụ cho nhiệm vụ, chiến lược và mục tiêu phát triển của Công ty.
            </Typography>
            <br/>
            <Typography variant='subtitle2' component="div" align="left">
              Hệ thống quản lí chất lượng là kim chỉ nam của các hoạt động sản xuất kinh doanh. Hệ thống quản lí chất lượng được coi như là công cụ hữu hiệu để sáng tạo và quản lí hiệu quả hoạt động kinh doanh. Cấu trúc của hệ thống sẽ hiệu quả cho việc cung cấp các dịch vụ có chất lượng cao ổn định, đáp ứng sự mong đợi của khách hàng.
            </Typography>
            <br/>
            <Image src="/images/Group-413-min-1.png"
              height={64}
              width={410}
              quality={100}
              alt="Picture of the author"
             />
             <br/>
             <br/>
             <div>
              <Button variant="contained" sx={{ backgroundColor: 'transparent', border: 2, borderColor: theme.palette.primary.light }} size='small'>
                Xem tất cả
              </Button>
             </div>
          </div>
        </Paper>
      </div>
  )
}

export default Certification;