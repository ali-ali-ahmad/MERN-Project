import React from 'react'
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Popup from 'reactjs-popup';
import pic from './pic.jpg'
import ali from './ali.jpg'
import karam from './karam.png'
import NavBar from '../components/NavBar/NavBar'

const About = () => {
    const commonStyles = { 
        // bgcolor: 'text.secondary',
        borderColor: 'primary.main',
        color:'text.disabled',
        width: '100rem',
        height: '33rem',
        ml:'1%',
        mt:'4%'
        
    };
    return (
        <>            
        <NavBar/>
    <Card sx={{ maxWidth: 345 , borderRadius: '16px',...commonStyles, border: 1}}>
    {/* <CardMedia sx={{ height: 140 }} image="/logo2.png" title="green iguana"/> */}
    <Box component="img" sx={{ ml:4, height: 250,width: 800,maxHeight: { xs: 233, md: 167 }, maxWidth: { xs: 800, md: 250 },}}
        alt="image11"
        src="https://element502.com/wp-content/uploads/2017/01/about-post.jpg"/>
    <CardContent>
        {/* <Typography color='black' gutterBottom variant="h5"  component="div" fontSize={'45px'} fontFamily={'Times New Roman'} fontWeight={'800'}>
            About Us
        </Typography> */}
        <Typography  color='black'  variant="body2" fontSize={'22px'} fontFamily={'Times New Roman'} marginLeft={'18px'} >
        
        <p><Popup trigger={<Link>Ali Rabah</Link>} >
                <div style={{border:'solid 4px black',borderRadius: '25% 10%',backgroundColor:'black',opacity:'0.91',color:'white',width:'300px', height :'280px', position:'relative', left:'465px',bottom:'150px'}}>
                    <div style={{marginLeft:'20px'}}>
                    <p> - Ali Rabah</p>
                    <p> - Mathematics At An-Najah National University</p>
                    <p> - Tulkarm , Saffarin</p>
                    <img src={ali}  style={{borderRadius:'50%',width:'130px',marginLeft:'70px'}} /></div>
                </div>
                </Popup></p>
                <p><Popup trigger={<Link>Omar Salem</Link>} >
                <div style={{border:'solid 4px black',borderRadius: '25% 10%',backgroundColor:'black',opacity:'0.91',color:'white',width:'300px', height :'280px', position:'relative', left:'465px',bottom:'170px'}}>
                    <div style={{marginLeft:'20px'}}>
                    <p> - Omar Salem</p>
                    <p> - Mathematics At An-Najah National University</p>
                    <p> - Tulkarm , Saffarin</p>
                    <img src={karam}  style={{borderRadius:'50%',width:'130px',marginLeft:'70px'}} /></div>
                </div>
                </Popup></p>
                <p><Popup trigger={<Link>Karam Taha</Link>} >
                <div style={{border:'solid 4px black',borderRadius: '25% 10%',backgroundColor:'black',opacity:'0.91',color:'white',width:'300px', height :'280px', position:'relative', left:'465px',bottom:'190px'}}>
                    <div style={{marginLeft:'20px'}}>
                    <p> - Karam Taha</p>
                    <p> - Mathematics At An-Najah National University</p>
                    <p> - Tulkarm , Saffarin</p>
                    <img src={karam}  style={{borderRadius:'50%',width:'130px',marginLeft:'70px'}} /></div>
                </div>
                </Popup></p>
                
                <p><Popup trigger={<Link>Marah Ashayer</Link>} >
                <div style={{border:'solid 4px black',borderRadius: '25% 10%',backgroundColor:'black',opacity:'0.91',color:'white',width:'300px', height :'280px', position:'relative', left:'465px',bottom:'280px'}}>
                    <div style={{marginLeft:'20px'}}>
                    <p> - Marah Ashayer</p>
                    <p> - Mathematics At An-Najah National University</p>
                    <p> - Tulkarm , Saffarin</p>
                    <img src={pic}  style={{borderRadius:'50%',width:'130px',marginLeft:'70px'}} /></div>
                </div>
                </Popup></p>
        </Typography>        
    </CardContent>
    <CardActions style={{marginLeft:'30px'}}>
        <Button variant="contained" size="large" href='/home'>Home</Button>
        <Button style={{marginLeft:'15px'}} size="small" >Contact Us</Button>
    </CardActions>
    </Card>
    </>
);
}

export default About;