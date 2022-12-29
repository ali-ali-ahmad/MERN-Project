import React from 'react'
import axios from 'axios';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

    
const DeleteButton =  props => {
    const { playerId, successCallback } = props;

    const deleteStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    
    const deletePlayer = e => {
        axios.delete('http://localhost:8000/api/players/' + playerId)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        <>
            <div style={deleteStyle}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton aria-label="delete" size="large" onClick={deletePlayer}>
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </Stack>
            </div>
        </>
    )
}

export default DeleteButton;

