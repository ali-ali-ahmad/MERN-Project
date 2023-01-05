// import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ProjectList from '../../components/MyProjects/ProjectList'
import React, { useState, useEffect } from "react";
import axios from "axios";

const MyProjects = () => {
    const [frontEnds, setFrontEnds] = useState([]);
        const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/frontEnds")
            .then((res) => {
                setFrontEnds(res.data);
                setLoaded(true);
            })
            .catch((err) => console.error(err));
        }, []);
    return (
        <div>
            <NavBar/>
            {loaded && <ProjectList frontEnds={frontEnds}/>}
        </div>
    )
}

export default MyProjects