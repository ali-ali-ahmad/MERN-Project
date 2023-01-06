import React, {useState } from 'react';
import ReactDOM from 'react-dom/client';
// import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const TagsCreator = (props) => {
    const {onNewFrontEnd, userProjects} = props;
    const [editStyle, setEditStyle] = useState({});
    const [title, setTitle] = useState();
    const [description, setDiscription] = useState();
    const [html, setHtml] = useState("");
    const [width, setWidth] = useState('100%');
    const [height, setHeight] = useState('100px');
    const [color, setColor] = useState('black');
    const [BGColor, setBGColor] = useState('white');
    const [display, setDisplay] = useState('flex');
    const [border, setBorder] = useState('1px solid black');
    const [content, setContent] = useState('');
    const [htmlStyle, setHtmlStyle] = useState([]);
    const [style, setStyle] = useState([]);
    // const [loaded, setLoaded] = useState(false);
    const [id, setId] = useState('div');
    const [className, setClassName] = useState('1');
    const [idSelector, setIdSelector] = useState('theContainer');
    const [classSelector, setClassSelector] = useState();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    
    const divElement = `<div id=${id} class='${className}'>${content}</div>`;
    const h1Element = `<h1 id=${id} class='${className}'>${content}</h1>`;
    const pElement = `<p id=${id} class='${className}'>${content}</p>`;
    const formElement = `<form id=${id} class='${className}'>${content}</form>`;
    const inputElement = `<input id=${id} class='${className}'/>${content}`;
    const labelElement = `<label id=${id} class='${className}'>${content}</label>`;

    const head = ReactDOM.createRoot(document.getElementById('cssManager'));
    head.render(
        htmlStyle
    )

    const handleClick =(event)=> {
        const element = document.elementFromPoint(event.clientX, event.clientY);
        setIdSelector(element.id);
        setClassSelector(element.className);
        setEditStyle(style.filter(a => a.className === classSelector));
    }
    console.log(idSelector, 'this is id selector');

    const addstyle2 =(event)=> {
    const index = style.findIndex(obj => obj.className === classSelector);
    const newStyle = style.map((obj, i) => {
        if (i === index) {
            return {
                    ...obj,
                    width: width,
                    height: height,
                    color: color,
                    BGColor: BGColor,
                    display: display,
                    border: border
            }; 
        }else {
            return {obj};
        }
    });
    setStyle(newStyle);
    const currentHtmlStyle = `.${className}{
        width: ${width};
        height: ${height};
        color: ${color};
        background-color: ${BGColor};
        display: ${display};
        border: ${border};
        }`;
        setHtmlStyle([...htmlStyle, currentHtmlStyle]);

}

    const addDivCode =() => {
        const currentHtmlStyle = `.${className}{
            width: ${width};
            height: ${height};
            color: ${color};
            background-color: ${BGColor};
            display: ${display};
            border: ${border};
            }`;
            setStyle([...style, {id, className, width, height, color, BGColor}]);
            setHtmlStyle([...htmlStyle, currentHtmlStyle]);
        document.getElementById(`${idSelector}`).innerHTML += divElement;
            const element  = document.getElementById('theContainer');
            setHtml(element.innerHTML);
    }
    const addH1Code =() => {
        const currentHtmlStyle = `.${className}{
            width: ${width};
            height: ${height};
            color: ${color};
            background-color: ${BGColor};
            display: ${display};
            border: ${border};
            }`;
            setStyle([...style, {id, className, width, height, color, BGColor}]);
            setHtmlStyle([...htmlStyle, currentHtmlStyle]);
        document.getElementById(`${idSelector}`).innerHTML += h1Element;
            const element  = document.getElementById('theContainer');
            setHtml(element.innerHTML);

    }
    const addPCode =() => {
        const currentHtmlStyle = `.${className}{
            width: ${width};
            height: ${height};
            color: ${color};
            background-color: ${BGColor};
            display: ${display};
            border: ${border};
            }`;
            setStyle([...style, {id, className, width, height, color, BGColor}]);
            setHtmlStyle([...htmlStyle, currentHtmlStyle]);
        document.getElementById(`${idSelector}`).innerHTML += pElement;
            const element  = document.getElementById('theContainer');
            setHtml(element.innerHTML);

    }
    const addFormCode =() => {
        const currentHtmlStyle = `.${className}{
            width: ${width};
            height: ${height};
            color: ${color};
            background-color: ${BGColor};
            display: ${display};
            border: ${border};
            }`;
            setStyle([...style, {id, className, width, height, color, BGColor}]);
            setHtmlStyle([...htmlStyle, currentHtmlStyle]);
        document.getElementById(`${idSelector}`).innerHTML += formElement;
            const element  = document.getElementById('theContainer');
            setHtml(element.innerHTML);
    }
    const addInputCode =() => {
        const currentHtmlStyle = `.${className}{
            width: ${width};
            height: ${height};
            color: ${color};
            background-color: ${BGColor};
            display: ${display};
            border: ${border};
            }`;
            setStyle([...style, {id, className, width, height, color, BGColor}]);
            setHtmlStyle([...htmlStyle, currentHtmlStyle]);
        document.getElementById(`${idSelector}`).innerHTML += inputElement;
            const element  = document.getElementById('theContainer');
            setHtml(element.innerHTML);
    }
    const addLabelCode =() => {
        const currentHtmlStyle = `.${className}{
            width: ${width};
            height: ${height};
            color: ${color};
            background-color: ${BGColor};
            display: ${display};
            border: ${border};
            }`;
            setStyle([...style, {id, className, width, height, color, BGColor}]);
            setHtmlStyle([...htmlStyle, currentHtmlStyle]);
        document.getElementById(`${idSelector}`).innerHTML += labelElement;
            const element  = document.getElementById('theContainer');
            setHtml(element.innerHTML);

    }


    const styling2 = {
        backgroundColor: "burlywood",
        width: "900px",
        height: "500px",
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNewFrontEnd( {title, description, html, style, userProjects} );
    };




    return  (
        <>
        <div>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
            <TextField
            required
            id="outlined-required"
            label="Title"
            // defaultValue="Hello Worl"
            onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
            required
            id="outlined-disabled"
            label="Description"
            // defaultValue="Hello World"
            onChange={(e) => setDiscription(e.target.value)}
            />
        </div>
    </Box>
        <Stack spacing={2} direction="row">
            <Button variant="text" name="html" onClick={addDivCode}>Div</Button>
            <Button variant="text" name="h1" onClick={addH1Code}>h1</Button>
            <Button variant="text" name="p" onClick={addPCode}>p</Button>
            <Button variant="text" name="form" onClick={addFormCode}>form</Button>
            <Button variant="text" name="input" onClick={addInputCode}>input</Button>
            <Button variant="text" name="label" onClick={addLabelCode}>label</Button>
        </Stack>
        <div style={{display: 'flex'}}>
            <div>
            <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="WireFrame" {...a11yProps(0)} />
        <Tab label="html" {...a11yProps(1)} />
        <Tab label="css" {...a11yProps(2)} />
    </Tabs>
    </Box>

    <TabPanel value={value} index={0}>
        <div style={styling2} id='theContainer' className='1' onClick={handleClick}></div>
    </TabPanel>
    <TabPanel value={value} index={1}>
        <div style={styling2}>
            <code>{html}</code>
        </div>
    </TabPanel>
    <TabPanel value={value} index={2}>
        <div style={styling2}>
        <code>{html}</code>
        </div>
    </TabPanel>
    </Box>
            </div>
    <div>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
            <TextField
            id="filled-required"
            label="id"
            // defaultValue="Hello World"
            variant="filled"
            onChange={(e) => setId(e.target.value)}
            />
            <TextField
            id="filled-required"
            label="ClassName"
            // defaultValue="Hello World"
            variant="filled"
            onChange={(e) => setClassName(e.target.value)}
            />
            <TextField
            id="filled-required"
            label="Width"
            // defaultValue="Hello World"
            variant="filled"
            value={width}
            onChange={(e) => setWidth(e.target.value)}/>
            <TextField
            id="filled-required"
            label="Height"
            // defaultValue="Hello World"
            variant="filled"
            value={height}
            onChange={(e) => setHeight(e.target.value)}/>
            <TextField
            id="filled-required"
            label="Color"
            // defaultValue="Hello World"
            variant="filled"
            value={color}
            onChange={(e) => setColor(e.target.value)}/>
            <TextField
            id="filled-required"
            label="Background-Color"
            // defaultValue="Hello World"
            variant="filled"
            value={BGColor}
            onChange={(e) => setBGColor(e.target.value)}/>
            <TextField
            id="filled-required"
            label="Display"
            // defaultValue="Hello World"
            variant="filled"
            value={display}
            onChange={(e) => setDisplay(e.target.value)}/>
            <TextField
            id="filled-required"
            label="Border"
            // defaultValue="Hello World"
            variant="filled"
            value={border}
            onChange={(e) => setBorder(e.target.value)}/>
            <TextField
            id="filled-required"
            label="Content"
            // defaultValue="Hello World"
            variant="filled"
            value={content}
            onChange={(e) => setContent(e.target.value)}/>
        </div>
    </Box>
    <Stack spacing={2} direction="row">
            <Button variant="text"  onClick={handleSubmit}>Save Project</Button>
            <Button variant="text"  onClick={addstyle2}>Update</Button>
        </Stack>
    </div>
    </div>
            <div>
            {/* <input type="text" placeholder="id"  onChange={(e) => setId(e.target.value)}/>
            <input type="text" placeholder="class"  onChange={(e) => setClassName(e.target.value)}/>
            <input type="text" placeholder="Width" value={width} onChange={(e) => setWidth(e.target.value)}/>
            <input type="text" placeholder="Height" value={height} onChange={(e) => setHeight(e.target.value)}/>
            <input type="text" placeholder="Color" value={color} onChange={(e) => setColor(e.target.value)}/>
            <input type="text" placeholder="BackGround Color" value={BGColor} onChange={(e) => setBGColor(e.target.value)}/>
            <input type="text" placeholder="display" value={display} onChange={(e) => setDisplay(e.target.value)}/>
            <input type="text" placeholder="Border" value={border} onChange={(e) => setBorder(e.target.value)}/>
            <textarea  rows="4" cols="50" placeholder="inner text" value={content} onChange={(e) => setContent(e.target.value)}/> */}
            {/* <button type="button" name="p" onClick={addstyle2}>add</button> */}
            </div>
        </div>
            {/* <div style={styling2} id='theContainer' className='1' onClick={handleClick} ></div> */}
            {/* <div>
                <form onSubmit={handleSubmit}>
                    <button type="submit" name="p">Create</button>
                </form> */}

            {/* </div> */}
        </>
    )
}

export default TagsCreator;