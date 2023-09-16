import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { useState, useEffect } from 'react';
import axios from 'axios';

const LiveDashboard = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      fontSize: 20,
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 21,
      paddingLeft: 8, // Adjust the left padding
      paddingRight: 8, // Adjust the right padding
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const [data, setData] = useState([]);
  const [verifyCount,setverifyCount]=useState(0);
  const [notverifyCount,setNotverifyCount]=useState(0);


  useEffect(() => {
    axios.get("http://65.2.137.105:3000/users") // Replace with your secure API endpoint
      .then((res) => {
        const data =res.data;
        const dataverify = data.filter((student) => student.verify === true)
        const notdataverify = data.filter((student) => student.verify === false)
        setverifyCount(dataverify.length);
        setNotverifyCount(notdataverify.length);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
        <Card>
        <CardContent>
          <div style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px', borderRadius: '5px' }}>
            <div style={{ background: '#f0f0f0', padding: '5px', borderRadius: '5px', marginBottom: '5px' }}>
              Total Records: {data.length}
            </div>
            <div style={{ background: '#f0f0f0', padding: '5px', borderRadius: '5px', marginBottom: '5px' }}>
              Verified Count: {verifyCount}
            </div>
            <div style={{ background: '#f0f0f0', padding: '5px', borderRadius: '5px' }}>
              Not Verified Count: {notverifyCount}
            </div>
          </div>
        </CardContent>
      </Card>
      <TableContainer component={Paper}>
        <Table aria-label="customized table" style={{ width: "100%" }}>
          <TableHead>
            <TableRow>
            <StyledTableCell align="center" style={{ width: "20%" }}>Id</StyledTableCell>
              <StyledTableCell align="center" style={{ width: "20%" }}>Student Name</StyledTableCell>
              <StyledTableCell align="center" style={{ width: "20%" }}>College</StyledTableCell>
              <StyledTableCell align="center" style={{ width: "15%" }}>Mobile Number</StyledTableCell>
              <StyledTableCell align="center" style={{ width: "25%" }}>Email</StyledTableCell>
              <StyledTableCell align="center" style={{ width: "20%" }}>Attendance</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((val, i) => (
              <StyledTableRow key={val._id}>
                 <StyledTableCell align="center">{val._id}</StyledTableCell>
                <StyledTableCell align="center">{val.name}</StyledTableCell>
                <StyledTableCell align="center">{val.institution}</StyledTableCell>
                <StyledTableCell align="center">{val.phone}</StyledTableCell>
                <StyledTableCell align="center">{val.email}</StyledTableCell>
                <StyledTableCell align="center">
                  {val.verify ? (
                    <button style={{ background: 'green', color: 'white' }}>Verified</button>
                  ) : (
                    <button style={{ background: 'red', color: 'white' }}>Not Verified</button>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default LiveDashboard;
