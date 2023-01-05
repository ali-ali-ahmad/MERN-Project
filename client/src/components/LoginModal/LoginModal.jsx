import React,{useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
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
          if (res.data.msg === "success!") {
            navigate("/:userProjects/create");
          } else {
            setErrormsg(res.data.msg);
          }
        })
        .catch((err) => console.log(err));
    };

    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            minHeight: 400,
            borderRadius: 'md',
            p: 2,
            boxShadow: 'lg',
          }}
        >
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Login" value="1" />
                  <Tab label="Register" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
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
              </TabPanel>
              <TabPanel value="2">
                <RegisterModal/>
              </TabPanel>
            </TabContext>
          </Box>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}

export default LoginModal