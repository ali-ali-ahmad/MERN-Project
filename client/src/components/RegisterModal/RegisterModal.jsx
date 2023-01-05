import React,{useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './register.css'
const RegisterModal = () => {
    // const [open, setOpen] = React.useState(false);
    // let { userProjects } = useParams();

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
            navigate("/:userProjects/create")
          }
        })
        .catch((err) => console.log(err));
    };

    return (
        <div>

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
        </div>
    )
}

export default RegisterModal