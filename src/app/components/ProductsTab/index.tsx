import * as React from 'react';
import { makeStyles } from '@mui/styles';
import theme from '@/theme';
import Typography from '@mui/material/Typography';
import { Paper, Tab, Tabs } from '@mui/material';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  }
})

const ProductsTab = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const tabs = ["TẤT CẢ SẢN PHẨM", "SẢN PHẨM NÔI BẬT", "DANH MỤC SẢN PHẨM"];

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography variant='h5' component="div" align="center" color={theme.palette.secondary.main}>
        NĂNG LỰC THIẾT BỊ THI CÔNG
      </Typography>
      <Typography variant='h4' component="div" align="center" color={theme.palette.primary.main}>
        ____
      </Typography>
      <br/>
      <br/>
      <Paper className={classes.root} sx={{boxShadow: 'none', fontSize: '10px'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {tabs.map((val, index) => ( 
              <Tab label={val} key={index} value={index} />
            ))}
        </Tabs>
      </Paper>
      <br/>
    </>
  )
}

export default ProductsTab;