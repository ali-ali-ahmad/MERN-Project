import React from 'react';
import MyProjects from './views/MyProjects/MyProjects';
import Profile from './views/Profile/Profile';
import {Routes, Route} from 'react-router-dom';
import Registration from './Marah/Registration';
import ChatBox from './components/Chatbox/ChatBox';
import TagManager from './components/NewApproach/TagManager';
import Home from './Marah/Home';   
import About from './Marah/About';  
import { useParams } from 'react-router-dom';

function App() {
    let { userProjects } = useParams();
    
    return (
        <>
            <Routes>
                <Route element={<TagManager userProjects={userProjects}/>} path='/:userProjects/create'/>
                <Route element={<Registration/>} path='/login/:userProjects '/>
                {/* <Route element={<Dashboard/>} path='/dashboard'/> */}
                <Route element={<ChatBox/>} path='/chat'/>
                <Route element={<Home/>} path='/'/>
                <Route element={<Profile/>} path='/profile'/>
                <Route element={<MyProjects/>} path='/projects'/>
                <Route element={<About/>} path='/about'/>
            </Routes>
        </>
    );
}
    
export default App;


