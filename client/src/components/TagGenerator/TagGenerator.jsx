import React, {useState, useEffect} from 'react';
import axios from "axios";


const TagGenerator = (props) => {
    // const divElement = '<div>div</div>';
    // const h1Element = '<h1>h1</h1>';
    // const pElement = '<p>p</p>';
    const divElement = `<div id={tag._id} dangerouslySetInnerHTML={{ __html: tag.html }}>div</div>`;
    const h1Element = '<h1 id={tag._id} dangerouslySetInnerHTML={{ __html: tag.html }}>h1</h1>';
    const pElement = '<p id={tag._id} dangerouslySetInnerHTML={{ __html: tag.html }}>p</p>';
    const {onNewFrontEnd, onNewUpdate} = props;
    const [html, setHtml] = useState();
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [color, setColor] = useState();
    const [BGColor, setBGColor] = useState();

    const [currentTag, setCurrentTag] = useState();
    const [loaded, setLoaded] = useState(false);


    useEffect (() =>{
        axios.get('http://localhost:8000/api/frontEnds/' +props.toUpdate)
            .then(res => {
                setCurrentTag(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err))
    });



    // const newStyle = {
    //     width: 100,
    //     height: 100,
    //     color: "red",
    //     BGColor: "blue",
    // };
    // const newStyle = {
    //     width: width,
    //     height: height,
    //     color: color,
    //     BGColor: BGColor
    // };

        const handleDiv = (e) => {
        e.preventDefault();
        setHtml(divElement);
    };
    const handleH1 = (e) => {
        e.preventDefault();
        setHtml(h1Element);
    };
    const handleP = (e) => {
        e.preventDefault();
        setHtml(pElement);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onNewFrontEnd( {html, width, height, color, BGColor} );
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        onNewUpdate( {html} );
    };

    return  (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit" name="p">Create</button>
            </form>
            <form onSubmit={handleUpdate}>
                <button type="submit" name="p">Update</button>
            </form>
        </div>
        <div>
            <button type="button" name="html" onClick={handleDiv}>div</button>
            <button type="button" name="h1" onClick={handleH1}>h1</button>
            <button type="button" name="p" onClick={handleP}>p</button>
            {loaded && <div>
            <input type="number" placeholder="Width" value={currentTag.width} onChange={(e) => setWidth(e.target.value)}/>
            <input type="number" placeholder="Height" value={currentTag.height} onChange={(e) => setHeight(e.target.value)}/>
            <input type="text" placeholder="Color" value={currentTag.color} onChange={(e) => setColor(e.target.value)}/>
            <input type="text" placeholder="BackGround Color" value={currentTag.BGColor} onChange={(e) => setBGColor(e.target.value)}/>
            </div>
            }
        </div>
        </>
    )
}

export default TagGenerator;