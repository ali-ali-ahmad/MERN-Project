import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

const CreateButton = () => {
    return (
        <div className='addbutton'>
            <div className='create'>
                <Link className='Link' to={'/'}>
                <AddIcon fontSize="large" color=""></AddIcon>
                </Link>
            </div>
        </div>
    )
}

export default CreateButton