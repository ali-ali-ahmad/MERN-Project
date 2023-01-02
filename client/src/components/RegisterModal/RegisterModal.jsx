import React,{useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Add from '@mui/icons-material/Add';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import './register.css'

const RegisterModal = () => {
    const [open, setOpen] = React.useState(false);

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const [formInfo, setFormInfo] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
  
    const changehandler = (e) => {
      console.log(e.target.name);
      setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
    };
  

  
    const register = async(e) => {
      console.log(formInfo)
      e.preventDefault();
      await axios.post("http://localhost:8000/api/register", formInfo, {withCredentials: true,})
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            setErrors(res.data.errors)
          } else {
            navigate("/home")
          }
        })
        .catch((err) => console.log(err));
    };

    return (
        <div>
            <React.Fragment>
            <Button
        color="neutral"
        onClick={() => setOpen(true)}
        className = "signup"
      >
        Sign Up
      </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 2,
            boxShadow: 'lg',
          }}
        >
          <form onSubmit={register} className = "form">
          <div className="form-group mb-2">
            <label>User Name:</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              onChange={changehandler}
            />
            {errors.userName ? (
              <p className="text-danger">{errors.userName.message}</p>
            ) : (
              ""
            )}
          </div>

          <div className="form-group mb-2">
            <label>Email: </label>
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={changehandler}
            />
            {errors.email ? (
              <p className="text-danger">{errors.email.message}</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mb-2">
            <label>Password: </label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={changehandler}
            />
            {errors.password ? (
              <p className="text-danger">{errors.password.message}</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mb-3">
            <label>Confirm Password: </label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              onChange={changehandler}
            />
            {errors.confirmPassword ? (
              <p className="text-danger">{errors.confirmPassword.message}</p>
            ) : (
              ""
            )}
          </div>

          <input
            type="submit"
            className="btn btn-danger col-md-2"
            value="Sign up"
          ></input>
        </form>
        </ModalDialog>
      </Modal>
      </React.Fragment>
        </div>
    )
}

export default RegisterModal