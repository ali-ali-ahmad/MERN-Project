import React from 'react';
import DisplayContainer from './views/DisplayContainer';
import {Routes, Route} from 'react-router-dom';
    
function App() {
    
    return (
        <>
            <Routes>
                <Route element={<DisplayContainer/>} path='/'/>
            </Routes>
        </>
    );
}
    
export default App;


