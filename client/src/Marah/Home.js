import React from 'react'
import './Home.css'
import NavBar from '../components/NavBar/NavBar'
import { Button } from '@mui/material';

const Home = () => {

    return (
        <>
        <NavBar/>
        <div className='body'>
            <body>
                <div style={{color:'black',fontFamily:'Times New Roman'}}>
                    <h1 style={{marginLeft:'13%',fontSize:'3.5rem',marginLeft:'12%'}}>RELAX</h1>
                    <h1 style={{fontSize:'2.1rem',marginLeft:'4%'}}>Sit Back And Let Us Do The Job !</h1>
                    <Button style={{backgroundColor: 'rgb(255 240 89 / 1)',color:'black',marginLeft:'7%'}} href='/login'>Get Started</Button>
                </div>
            </body>
            <br></br>
        <div className="App">
                <video width="500" height="250" style={{paddingLeft:"1%"}} controls>
                <source src="..Videos/video1.mp4" type="video/mp4"/>
                </video>
        </div> 
            <div className='whoarewe'>
                <h2>What We Do?</h2>
                <h3>Fro-Frame is a website designed to help programers to start their essential front-end code by building a wireframe from one side,
                    and generate an HTML and CSS code which they can use to get started with their project.
                    By that we save for you the boring process of creating or adding non original designs and templates from other websites.
                </h3>
            </div>
        </div> 
        </>
    )
}

export default Home
