import React, {useState} from 'react';
import {Tabs, Tab, Box } from '@mui/material';
import TabPanel from './TabPanel';

function a11yProps(index) {
    return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabDisplay = (props) => {
    const [value, setValue] = useState(0);
    const [idSelector, setIdSelector] = useState('theContainer');

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const styling2 = {
        backgroundColor: "grey",
        width: "900px",
        height: "500px",
    };

    const handleClick =(event)=> {
        const element = document.elementFromPoint(event.clientX, event.clientY);
        console.log(element.id);
        setIdSelector(element.id);
    }

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Wireframe" {...a11yProps(0)} />
                        <Tab label="html" {...a11yProps(1)} />
                        <Tab label="CSS" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                <div style={styling2} id='theContainer' onClick={handleClick}></div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div></div>
                </TabPanel>
            </Box>
        </>
    )
}
export default TabDisplay;