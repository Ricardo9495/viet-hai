'use client'

import React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TableFooter } from '@mui/material';
import AppBar from '@/app/components/AppBar';
import Footer from '@/app/components/Footer';
import ToolBar from '@/app/components/ToolBar';
import Paper from '@mui/material/Paper';
import theme from '@/theme';


type TuyenDung = {
  position: string;
  number: string;
  description: string;
  salary: string;
}

const createData = (position: string, number: string, description: string, salary: string): TuyenDung => {
  return { position, number, description, salary };
}


const rows = [
  createData(
    "Chuyên viên quản lý dự án (PM)",
    "02",
    "Nam. Tốt nghiệp cao đẳng/đại học các chuyên ngành xây dựng/cơ khí/kiến thức. Có kinh nghiệm từ 1-2 năm làm quản lý dự án. Tiếng Anh khá.",
    "15-20 triệu/tháng"
  ),
  createData(
    "Kỹ sư thiết kế cơ khí",
    "02",
    "Nam. Tốt nghiệp đại học các chuyên ngành xây dựng/cơ khí. Có kinh nghiệm từ 1-2 năm. Tiếng Anh cơ bản.",
    "15-18 triệu/tháng"
  ),
  createData(
    "Kỹ sư thiết kế kết cấu thép",
    "03",
    "Nam. Tốt nghiệp đại học các chuyên ngành xây dựng/cơ khí. Có kinh nghiệm từ 1-2 năm. Tiếng Anh cơ bản.",
    "15-18 triệu/tháng"
  ),
  createData(
    "Kỹ sư công nghệ",
    "03",
    "Nam/Nữ. Tốt nghiệp đại học các chuyên ngành xây dựng/cơ khí. Có kinh nghiệm về hàn cắt và gia thông kết cấu thép.",
    "15-18 triệu/tháng"
  ),
  createData(
    "Kỹ sư QA",
    "03",
    "Nam/Nữ. Tốt nghiệp đại học các chuyên ngành kỹ thuật/xây dựng/cơ khí. Có kinh nghiệm từ 1-2 năm. Tiếng Anh cơ bản.",
    "15-18 triệu/tháng"
  ),
  createData(
    "Kỹ sư QC",
    "03",
    "Nam/Nữ. Tốt nghiệp đại học các chuyên ngành kỹ thuật/xây dựng/cơ khí.  Có kinh nghiệm từ 1-2 năm . Tiếng Anh cơ bản.",
    "15-18 triệu/tháng"
  ),
  createData(
    "Nhân viên kinh doan",
    "02",
    "Nam/Nữ. Tốt nghiệp đại học các chuyên ngành kỹ thuật/xây dựng/cơ khí/quản trị kinh doanh.  Tiếng Anh khá.",
    "15-18 triệu/tháng"
  ),
  createData(
    "Thợ hàn",
    "30",
    "Nam/Nữ. Tốt nghiệp đại học các trường cao đẳng/đào tạo nghề.  Ưu tiên có kinh nghiệm về hàn C02.",
    "15-20 triệu/tháng"
  ),
  createData(
    "Thợ cơ khí (thợ pha cắt, thợ gá, thợ vận hành, ...)",
    "50",
    "Nam/Nữ. Tốt nghiệp đại học các trường cao đẳng/đào tạo nghề. Chấp nhận mới ra trường, sẽ được đào tạo.",
    "12-15 triệu/tháng"
  ),
  createData(
    "Lao động phổ thông (sơn, làm sạch, đóng kiện, VSCN,...)",
    "30",
    "Nam/Nữ. Tuổi từ 18-45.",
    "9-12 triệu/tháng"
  ),
]

const Page = () => {
  return (
    <main>
      <AppBar />
      <div>
        <ToolBar/>
      </div>
      {/* Body */}
        <Container fixed sx={{ marginTop: 5 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell></TableCell>
                <TableCell>Vị trí cần tuyển</TableCell>
                <TableCell align="left">Số lượng cần tuyển</TableCell>
                <TableCell align="left">Yêu cầu công việc</TableCell>
                <TableCell align="left">Mức lương</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows && rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="left">{row.position}</TableCell>
                  <TableCell align="left">{row.number}</TableCell>
                  <TableCell align="left">
                    <p>
                    {row.description}
                    </p>
                  </TableCell>
                  <TableCell align="left">{row.salary}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow></TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <Paper sx={{ marginTop: 1, paddingLeft: 2, paddingTop: 2 }}>
            <Typography> 
                Tăng lương theo năng lực và thâm niên công tác.
            </Typography>
            <Typography> 
                  Thưởng tháng 13, đóng BHXH, BHYT đầy đủ theo quy định của nhà nước.
            </Typography>
            <Typography> 
                  Hỗ trợ bữa ăn trưa tại căng tin. Hỗ trợ chỗ ở tại kí túc xá cho BCCNV ngoài tỉnh.
            </Typography>
            <br/>
            <Typography color='red'>(*)</Typography>
            <Typography variant='h6'> 
                  Ứng viên quan tâm vui lòng gửi CV qua SĐT/Zalo: 0979522216 - Ms Trang
            </Typography>
        </Paper>
        </Container>
      <Footer />
    </main>
  );
}

export default Page;