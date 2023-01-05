import React, {useState } from 'react';
import ReactDOM from 'react-dom/client';
// import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
    const {onNewFrontEnd, onNewUpdate} = props;
    const [editStyle, setEditStyle] = useState({});
    const [title, setTitle] = useState();
    const [description, setDiscription] = useState();
    const [html, setHtml] = useState("");
    const [width, setWidth] = useState('100px');
    const [height, setHeight] = useState('100px');
    const [color, setColor] = useState('red');
    const [BGColor, setBGColor] = useState('blue');
    const [display, setDisplay] = useState('flex');
    const [content, setContent] = useState('add somethings');
    const [htmlStyle, setHtmlStyle] = useState([]);
    const [style, setStyle] = useState([]);
    // const [loaded, setLoaded] = useState(false);
    const [id, setId] = useState();
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
                    display: display
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
            }`;
            setStyle([...style, {id, className, width, height, color, BGColor}]);
            setHtmlStyle([...htmlStyle, currentHtmlStyle]);
        document.getElementById(`${idSelector}`).innerHTML += pElement;
            const element  = document.getElementById('theContainer');
            setHtml(element.innerHTML);
    }


    const styling2 = {
        backgroundColor: "grey",
        width: "900px",
        height: "500px",
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNewFrontEnd( {title, description, html, style} );
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        onNewUpdate( {title, description, html, style} );
    };



    return  (
        <>
        <div>
            <div>
                <input type="text" placeholder="Title"  onChange={(e) => setTitle(e.target.value)}/>
                <input type="text" placeholder="Description"  onChange={(e) => setDiscription(e.target.value)}/>
                <button type="button" name="html" onClick={addDivCode}>div</button>
                <button type="button" name="h1" onClick={addH1Code}>h1</button>
                <button type="button" name="p" onClick={addPCode}>p</button>
                <button type="button" name="p" onClick={addstyle2}>add</button>
            </div>
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
            <code>{htmlStyle}</code>
        </div>
    </TabPanel>
    </Box>
            </div>
            <div>
            <input type="text" placeholder="id"  onChange={(e) => setId(e.target.value)}/>
            <input type="text" placeholder="class"  onChange={(e) => setClassName(e.target.value)}/>
            <input type="text" placeholder="Width" value={editStyle.width} onChange={(e) => setWidth(e.target.value)}/>
            <input type="text" placeholder="Height" value={height} onChange={(e) => setHeight(e.target.value)}/>
            <input type="text" placeholder="Color" value={color} onChange={(e) => setColor(e.target.value)}/>
            <input type="text" placeholder="BackGround Color" value={BGColor} onChange={(e) => setBGColor(e.target.value)}/>
            <input type="text" placeholder="display" value={BGColor} onChange={(e) => setDisplay(e.target.value)}/>
            <textarea  rows="4" cols="50" placeholder="inner text" value={content} onChange={(e) => setContent(e.target.value)}/>
            </div>
        </div>
            {/* <div style={styling2} id='theContainer' className='1' onClick={handleClick} ></div> */}
            <div>
                <form onSubmit={handleSubmit}>
                    <button type="submit" name="p">Create</button>
                </form>
                <form onSubmit={handleUpdate}>
                    <button type="submit" name="p">Update</button>
                </form>
            </div>
        </>
    )
}

export default TagsCreator;