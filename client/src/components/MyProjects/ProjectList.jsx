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
// import NavBar from '../NavBar/NavBar'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// function createData(projectName, description, lastUpdate, action) {
//   return { projectName, description, lastUpdate, action };
// }


export default function ProjectList(props) {
  const [open, setOpen] = React.useState(false);
  const{frontEnds}= props

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const rows = [
  //   createData('Frozen yoghurt', 'its a cold snack', '22-07-2022',<Grid><Button aria-label="delete" onClick={handleClickOpen}><DeleteIcon /></Button><IconButton aria-label="delete"><EditIcon /></IconButton></Grid>),
  
  // ];

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
          {frontEnds.map((tag) => (
            <TableRow
              key={tag._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row">
                {tag.title}
              </TableCell>
              <TableCell align="right">{tag.description}</TableCell>
              <TableCell align="right">{tag.updatedAt}</TableCell>
              <TableCell align="right"><Grid><Button aria-label="delete" onClick={handleClickOpen}><DeleteIcon /></Button><IconButton aria-label="delete"><EditIcon /></IconButton></Grid></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this project?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Deleting will be permanent
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </TableContainer>
      </>
  );
}