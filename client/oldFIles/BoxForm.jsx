import React, { useState } from 'react';

    
    
const BoxForm = (props) => {
    const [box, setBox] = useState("");
    
    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        props.onNewBox( box );
        setBox("");
    };
    
    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
            <form onSubmit={ handleSubmit }>
                <h1
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >Add Box</h1>
                <div
                    style={{
                        display: 'flex',
                        width: '400px',
                        height: '30px',
                        justifyContent: 'space-around',
                    }}
                >
                    <h3>Color</h3>
                    <input 
                    type="text" 
                    placeholder="Enter your Color here"
                    onChange={ (e) => setBox(e.target.value) }
                    name="box"
                    value={ box }
                    />
                    <input type="submit" value="Add Box" />
                </div>
            </form>
        </div>
    );
};
    
export default BoxForm;
