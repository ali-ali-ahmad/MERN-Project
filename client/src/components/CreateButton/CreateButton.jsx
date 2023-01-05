import React from 'react';
import './style.css';
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

const CreateButton = () => {
    return (
        <>
        <div className='addbutton'>
            <div className='create'>
                <Link className='Link' to={'/create'}>
                <AddIcon fontSize="large" color=""></AddIcon>
                </Link>
            </div>
        </div>
        <div style={{color:'black', marginTop: '5%',fontFamily:'Times New Roman'}}>
            <h1 style={{marginLeft:'13%',fontSize:'3.5rem',marginLeft:'12%'}}>RELAX</h1>
            <h1 style={{fontSize:'2.1rem',marginLeft:'4%'}}>Sit Back And Let Us Do The Job !</h1>
            <Button style={{backgroundColor: 'rgb(255 240 89 / 1)',color:'black',marginLeft:'7%'}}>Get Started</Button>
        </div>
        
        
        </>
    )
}

export default CreateButton;