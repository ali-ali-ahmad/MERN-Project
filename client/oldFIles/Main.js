import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PlayerList from '../components/PlayerList';
import TabPanel from '../components/TabPanel';
import './css/main.css'
import {Tabs, Tab, Box } from '@mui/material';
import PlayerForm from '../components/PlayerForm';



function a11yProps(index) {
    return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    };
}


const Main = (props) => {
    const [players, setPlayers] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 
    // const navigate = useNavigate();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);

    };



    const createPlayer = player => {
        axios.post('http://localhost:8000/api/players', player)
        .then(res => {
            setPlayers([...players, res.data]);
            setValue(0);
            })
            // .then(res=>{navigate("/")})
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            }) 
    }



    useEffect (() =>{
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId));
    }

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Players List" {...a11yProps(0)} />
                        <Tab label="Add Player" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    {loaded && <PlayerList players={players} removeFromDom={removeFromDom} />}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <h1>Add a new Player</h1>
                    <PlayerForm onSubmitProp={createPlayer} initialName="" initialPosition="" errorsGen={errors}/>
                </TabPanel>
            </Box>
        </>
    )
};

export default Main;



