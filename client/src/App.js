import React from 'react';
import DisplayContainer from './views/DisplayContainer/DisplayContainer';
import {Routes, Route} from 'react-router-dom';
import Registration from './Marah/Registration';
import Dashboard from './Marah/Dashboard';   
function App() {
    
    return (
        <>
            <Routes>
                <Route element={<DisplayContainer/>} path='/'/>
                <Route element={<Registration/>} path='/marah'/>
                <Route element={<Dashboard/>} path='/dashboard'/>
            </Routes>
        </>
    );
}
    
export default App;


