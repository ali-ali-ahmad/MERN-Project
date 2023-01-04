import React from 'react';
import DisplayContainer from './views/DisplayContainer/DisplayContainer';
// import AboutUs from './views/AboutUs/AboutUs';
import Dashboard from './views/Dashboard/Dashboard';
import MyProjects from './views/MyProjects/MyProjects';
import Profile from './views/Profile/Profile';
import {Routes, Route} from 'react-router-dom';
import Registration from './Marah/Registration';
import ChatBox from './components/Chatbox/ChatBox';
import Home from './Marah/Home';   
import About from './Marah/About';  

function App() {
    
    return (
        <>
            <Routes>
                <Route element={<DisplayContainer/>} path='/create'/>
                <Route element={<Registration/>} path='/login'/>
                <Route element={<Dashboard/>} path='/dashboard'/>
                <Route element={<ChatBox/>} path='/chat'/>
                <Route element={<Home/>} path='/home'/>
                <Route element={<Profile/>} path='/profile'/>
                <Route element={<MyProjects/>} path='/projects'/>
                {/* <Route element={<AboutUs/>} path='/about'/> */}
                <Route element={<About/>} path='/about'/>
            </Routes>
        </>
    );
}
    
export default App;


