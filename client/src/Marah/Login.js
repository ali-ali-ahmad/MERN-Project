import React,{useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
          navigate("/");
        } else {
          setErrormsg(res.data.msg);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="row d-flex">
      <h1>Login </h1>
      <form onSubmit={login}>
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
    </div>
  );
};

export default Login;
