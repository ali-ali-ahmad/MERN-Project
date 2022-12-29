import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from './views/Main';
// import AddPlayer from './views/AddPlayer';
import Detail from './views/Detail';
import Update from './views/Update';
import './App.css'
import { Link } from 'react-router-dom';
import Status from './views/Status';
// import PlayerList from './components/PlayerList';



const App = () => {

    return (
        <>
        <div className='header'>
        <h1><Link to={'/'}>Manage Players</Link></h1>
        <h1><Link to={'/status'}>Manage Players Status</Link></h1>
        </div>
        <div className="App">
        <Routes>
            <Route element={<Main/>} path='/'/>
            {/* <Route element={<AddPlayer/>} path= '/players'/> */}
            <Route element={<Status/>} path= '/status'/>
            <Route element={<Detail/>} path= '/players/:id'/>
            <Route element={<Update/>} path="/players/:id/edit"/>
        </Routes>
        </div>
        </>
    );
}
export default App;



