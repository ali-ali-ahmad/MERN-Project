import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import './style.css'

const NavBar = () => {
    return (
        <nav className='nav'>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className='tools' >
                <div className='items'>
                    <Typography variant="h5">
                    <Link className='Link' to={'/home'}>Logo</Link>
                    </Typography>
                    <div className='navitems'>
                    <Link className='Link' to={'/profile'}>Profile</Link>
                    <Link className='Link' to={'/projects'}>My Projects</Link>
                    <Link className='Link' to={'/about'}>About</Link>
                    </div>
                </div>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            </Box>
        </nav>
    )
}

export default NavBar