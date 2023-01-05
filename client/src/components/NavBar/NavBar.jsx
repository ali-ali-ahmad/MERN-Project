import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import './style.css'
import LoginModal from '../LoginModal/LoginModal';
import logo2 from './logo2.png'

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      axios
        .get("http://localhost:8000/api/users/loggedin", {
          withCredentials: true,
        })
        .then((res) => {
          setLoggedInUser(res.data.user);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          navigate("/");
        });
    }, []);
  
    const logout = async(e) => {
      await axios.get("http://localhost:8000/api/users/logout", { withCredentials: true })
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <>
        <nav className='nav'>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className='tools' >
                <div className='items'>
                    <Typography variant="h5">
                        {/* <Link className='Link' to={'/'}>Logo</Link> */}
                        <Link className='Link' to={'/'}><img style={{marginTop:'2px',marginLeft:'4px',height:'55px'}}  src={logo2} alt='logo'/></Link>
                        {/* <img style={{marginTop:'2px',marginLeft:'4px',height:'55px'}}  src={logo2} alt='logo'/> */}
                    </Typography>
                    <div className='navitems'>
                    <Link className='Link' to={'/profile'}>Profile</Link>
                    <Link className='Link' to={'/projects'}>My Projects</Link>
                    <Link className='Link' to={'/about'}>About</Link>
                    <Link className='Link' to={'/chat'}>Chat</Link>
                    </div>
                </div>
                {loggedInUser ? (
                <div>
                    <button className='logout' onClick={logout}>Logout</button>
                </div>
                ) : (
                    <LoginModal/>
                )}
                </Toolbar>
            </AppBar>
            </Box>
        </nav>

        </>
    )
}

export default NavBar