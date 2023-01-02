import React,{useState} from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/joy/Button';
import TextField from '@mui/joy/TextField';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import Typography from '@mui/joy/Typography';
import RegisterModal from '../RegisterModal/RegisterModal';
import './login.css'


const LoginModal = () => {
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();
    const [formInfo, setFormInfo] = useState({
      email: "",
      password: "",
    });
  
    const [errormsg, setErrormsg] = useState(null);
  
    const changehandler = (e) => {
      setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
    };
  
    const login = (e) => {
      e.preventDefault();
      axios.post("http://localhost:8000/api/login", formInfo, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          if (res.data.msg == "success!") {
            navigate("/profile");
          } else {
            setErrormsg(res.data.msg);
          }
        })
        .catch((err) => console.log(err));
    };
    
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
      >
        Login
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{
            maxWidth: 500,
            minHeight: 300,
            borderRadius: 'md',
            p: 2,
            boxShadow: 'lg',
          }}
        >
          <form onSubmit={login} className = "form">
        {errormsg ? <p className="text-danger">{errormsg}</p> : ""}
        <div className="form-group mb-2">
          <label>Email: </label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={changehandler}
          />
        </div>
        <div className="form-group mb-2">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            className="form-control" 
            onChange={changehandler}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary col-md-2"
          value="Login"
        ></input>
      </form>
      <Typography
            id="basic-modal-dialog-title"
            component="h4"
            level="inherit"
            mb="0.25em"
          >
            Dont have an account? <RegisterModal/>
          </Typography>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}

export default LoginModal