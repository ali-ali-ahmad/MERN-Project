import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const CssGenerator = (props) => {
    const {initialWidth, initialHeight, initialColor, initialBGColor, onSubmitStyling} = props;
    const [width, setWidth] = useState(initialWidth);
    const [height, setHeight] = useState(initialHeight);
    const [color, setColor] = useState(initialColor);
    const [BGColor, setBGColor] = useState(initialBGColor);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitStyling({width, height, color, BGColor});
        
    }

    return  (
        <>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    ></Box>
                    <p>
                        <TextField
                            // error
                            id="outlined-error-helper-text"
                            label="Width"
                            value={width}
                            type='text'
                            onChange={(e) => setWidth(e.target.value)}
                        />
                    </p>
                    <p>
                        <TextField
                            // error
                            id="outlined-error-helper-text"
                            label="Height"
                            value={height}
                            type='text'
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    </p>
                    <p>
                        <TextField
                            // error
                            id="outlined-error-helper-text"
                            label="Color"
                            value={color}
                            type='text'
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </p>
                    <p>
                        <TextField
                            // error
                            id="outlined-error-helper-text"
                            label="BackGround Color"
                            value={BGColor}
                            type='text'
                            onChange={(e) => setBGColor(e.target.value)}
                        />
                    </p>
                </div>
                <Button type='submit' variant="contained" color="success">Submit</Button>
            </form>
        </>
    )
}

export default CssGenerator;