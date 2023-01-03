import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';



const TagsCreator = (props) => {

    const {onNewFrontEnd, onNewUpdate} = props;
    const [title, setTitle] = useState();
    const [html, setHtml] = useState("");
    const [width, setWidth] = useState('100px');
    const [height, setHeight] = useState('100px');
    const [color, setColor] = useState('red');
    const [BGColor, setBGColor] = useState('blue');
    const [content, setContent] = useState('add somethings');
    const [style, setStyle] = useState([]);
    // const [loaded, setLoaded] = useState(false);
    const [id, setId] = useState();
    const [className, setClassName] = useState();
    const [idSelector, setIdSelector] = useState('theContainer');

    
    const divElement = `<div ${id} class='${className}'>${content}  </div>`;
    const h1Element = `<h1 ${id} class='${className}' onClick={handleClick}>${content}</h1>`;
    const pElement = `<p ${id} class='${className}' onClick={handleClick}>${content}</p>`;

    const head = ReactDOM.createRoot(document.getElementsByTagName('head')[0]);
    head.render(
        <style>
            {style}
        </style>
    )

    const handleClick =(event)=> {
        const element = document.elementFromPoint(event.clientX, event.clientY);
        console.log(element.id);
        setIdSelector(element.id);
    }

    const addDivCode =() => {
        document.getElementById(`${idSelector}`).innerHTML += divElement;
        setStyle([...style, `.${className}{
            width: ${width};
            height: ${height};
            color: ${color};
            background-color: ${BGColor};
            }`])
            const element  = document.getElementById('theContainer');
            setHtml(element.innerHTML);
    }
    const addH1Code =() => {
        document.getElementById(`${idSelector}`).innerHTML += h1Element;
        setStyle([...style, `.${className}{
            width: ${width};
            height: ${height};
            color: ${color};
            background-color: ${BGColor};
            }`])
            const element  = document.getElementById('theContainer');
            setHtml(element.innerHTML);
    }
    const addPCode =() => {
        document.getElementById(`${idSelector}`).innerHTML += pElement;
        setStyle([...style, `.${className}{
            width: ${width};
            height: ${height};
            color: ${color};
            background-color: ${BGColor};
            }`])
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
        onNewFrontEnd( {title, html, style} );
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        onNewUpdate( {title, html, style} );
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
            <input type="text" placeholder="Title"  onChange={(e) => setTitle(e.target.value)}/>
            <button type="button" name="html" onClick={addDivCode}>div</button>
            <button type="button" name="h1" onClick={addH1Code}>h1</button>
            <button type="button" name="p" onClick={addPCode}>p</button>
            <div>
            <input type="text" placeholder="id"  onChange={(e) => setId(`id= '${e.target.value}'`)}/>
            <input type="text" placeholder="class"  onChange={(e) => setClassName(e.target.value)}/>
            <input type="text" placeholder="Width" value={width} onChange={(e) => setWidth(e.target.value)}/>
            <input type="text" placeholder="Height" value={height} onChange={(e) => setHeight(e.target.value)}/>
            <input type="text" placeholder="Color" value={color} onChange={(e) => setColor(e.target.value)}/>
            <input type="text" placeholder="BackGround Color" value={BGColor} onChange={(e) => setBGColor(e.target.value)}/>
            <textarea  rows="4" cols="50" placeholder="inner text" value={content} onChange={(e) => setContent(e.target.value)}/>
            </div>
        </div>
                    <div style={styling2} id='theContainer' onClick={handleClick}></div>
        </>
    )
}

export default TagsCreator;