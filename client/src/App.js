import React from 'react';
// import DisplayContainer from './views/DisplayContainer/DisplayContainer';
import AboutUs from './views/AboutUs/AboutUs';
import Dashboard from './views/Dashboard/Dashboard';
import MyProjects from './views/MyProjects/MyProjects';
import Profile from './views/Profile/Profile';
import {Routes, Route} from 'react-router-dom';
import Registration from './Marah/Registration';
import ChatBox from './components/Chatbox/ChatBox';
import TagManager from './components/NewApproach/TagManager';
// import Dashboard from './Marah/Dashboard';   


function App() {
    
    return (
        <>
            <Routes>
                <Route element={<TagManager/>} path='/create'/>
                {/* <Route element={<DisplayContainer/>} path='/create'/> */}
                <Route element={<Registration/>} path='/login'/>
                {/* <Route element={<Dashboard/>} path='/dashboard'/> */}
                <Route element={<ChatBox/>} path='/chat'/>
                <Route element={<Dashboard/>} path='/home'/>
                <Route element={<Profile/>} path='/profile'/>
                <Route element={<MyProjects/>} path='/projects'/>
                <Route element={<AboutUs/>} path='/about'/>
            </Routes>
        </>
    );
}
    
export default App;


