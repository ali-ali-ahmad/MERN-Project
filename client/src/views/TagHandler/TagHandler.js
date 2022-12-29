import React, {useState} from 'react'
// import axios from 'axios';
// import PlayerList from '../components/PlayerList';
// import TabPanel from '../components/TabPanel';
import './css/main.css'
// import {Tabs, Tab, Box } from '@mui/material';
// import PlayerForm from '../components/PlayerForm';
// import CssGenerator from '../components/CssGenerator/CssGenerator';
import TagGenerator from '../../components/TagGenerator/TagGenerator';

const TagHandler = (props) => {
    const [html, setHtml] = useState([]);
    // const [loaded, setLoaded] = useState(false);


    const createTag = ( newTag ) => {
        setHtml([...html, newTag]);
        props.onNewTag(html)
    }

    // useEffect (() =>{
    //     axios.get('http://localhost:8000/api/players')
    //         .then(res => {
    //             setPlayers(res.data);
    //             setLoaded(true);
    //         })
    //         .catch(err => console.error(err));
    // }, []);

    // const removeFromDom = playerId => {
    //     setPlayers(players.filter(player => player._id !== playerId));
    // }

    return (
        <>
            {/* <CssGenerator 
            onSubmitStyling={createStyling}
            initialWidth={styling.width}
            initialHeight={styling.height}
            initialColor={styling.color}
            initialBGColor={styling.BGColor}
            /> */}
            <TagGenerator
            onSubmitTag={createTag}
            />
        </>
    )
};

export default TagHandler;



