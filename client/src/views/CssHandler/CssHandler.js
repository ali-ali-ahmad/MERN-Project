import React, {useState} from 'react'
// import styles from './CssHandler.module.css';
import CssGenerator from '../../components/CssGenerator/CssGenerator';

const CssHandler = (props) => {
    const [styling, setStyling] = useState([]);

    const createStyling = ( newStyle ) => {
        setStyling( newStyle);
    }

    return (
        <>
            <CssGenerator 
            onSubmitStyling={createStyling}
            initialWidth={styling.width}
            initialHeight={styling.height}
            initialColor={styling.color}
            initialBGColor={styling.BGColor}
            />
        </>
    )
};

export default CssHandler;



