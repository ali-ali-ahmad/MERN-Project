import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from  '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Grid } from '@mui/material';
import NavBar from '../NavBar/NavBar'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function createData(projectName, description, lastUpdate, action) {
  return { projectName, description, lastUpdate, action };
}

const rows = [
  createData('Frozen yoghurt', 'its a cold snack', '22-07-2022',<Grid><IconButton aria-label="delete"><DeleteIcon /></IconButton><IconButton aria-label="delete"><EditIcon /></IconButton></Grid>),

];

export default function ProjectList() {
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <br></br>
          <br></br>
          <TableRow>
            <TableCell  style={{fontFamily:'Times New Roman',fontSize:'20px'}}>Project Name</TableCell>
            <TableCell align="right"   style={{fontFamily:'Times New Roman',fontSize:'20px'}}>Description</TableCell>
            <TableCell align="right"   style={{fontFamily:'Times New Roman',fontSize:'20px'}}>Last Update</TableCell>
            <TableCell align="right"   style={{fontFamily:'Times New Roman',fontSize:'20px'}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.projectName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row">
                {row.projectName}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.lastUpdate}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </>
  );
}