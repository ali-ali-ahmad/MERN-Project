// import React, { useState } from 'react';


const BoxDisplay = (props) => {
    
    
    return (
        <>
            <h1>Current Boxes</h1>
            <div className="container">
                { props.box.map( (box, i) => 
                    <div 
                    key={ i }
                    style={{
                        backgroundColor: box,
                        width: '200px',
                        height: '200px',
                        display: 'inline-grid',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    >{ box }</div> ) }
            </div>

        </>
    );
};
    
export default BoxDisplay;

