import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './style.css'
import CreateButton from '../../components/CreateButton/CreateButton';

const Dashboard = () => {
    return (
        <div>
            <NavBar/>
            <CreateButton/>
        </div>
    )
}

export default Dashboard