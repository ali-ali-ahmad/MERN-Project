import React from 'react';
import DisplayContainer from './views/DisplayContainer/DisplayContainer';
import AboutUs from './views/AboutUs/AboutUs';
import Dashboard from './views/Dashboard/Dashboard';
import MyProjects from './views/MyProjects/MyProjects';
import Profile from './views/Profile/Profile';
import {Routes, Route} from 'react-router-dom';
    
function App() {
    
    return (
        <>
            <Routes>
                <Route element={<DisplayContainer/>} path='/'/>
                <Route element={<Dashboard/>} path='/home'/>
                <Route element={<Profile/>} path='/profile'/>
                <Route element={<MyProjects/>} path='/projects'/>
                <Route element={<AboutUs/>} path='/about'/>
            </Routes>
        </>
    );
}
    
export default App;


