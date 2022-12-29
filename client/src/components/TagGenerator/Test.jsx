import React, {useState} from 'react';

const TagGenerator = (props) => {

    const [html, setHtml] = useState();
    const [style, setStyle] = useState();

    const handleDiv = (e) => {
        e.preventDefault();
        setHtml("heloo");
        setStyle("flex");
        console.log("this is the div handler");
        props.onNewFrontEnd( {html, style} );

    };

// const divElement = <div dangerouslySetInnerHTML={createDivMarkup()}/>;
const h1Element = <h1 dangerouslySetInnerHTML={createH1Markup()} />;
const pElement = <p dangerouslySetInnerHTML={createPMarkup()} />;
// const [h1Text, setH1Text] = useState('dfds');

// function createDivMarkup() {
//     return {__html: 'First &middot; Second'};
// }
function createH1Markup() {
    return {__html: 'First &middot; Second'};
}
function createPMarkup() {
    return {__html: 'First &middot; Second'};
}



    // const handleDiv = (e) => {
    //     e.preventDefault();
    //     props.onNewTag( "hello" );
    // };
    const handleH1 = (e) => {
        e.preventDefault();
        props.onNewTag( h1Element );
    };
    const handleP = (e) => {
        e.preventDefault();
        props.onNewTag( pElement );
    };
    
    return (
        <>      
            <form onClick={handleDiv}>
                <button type="submit" name="html" >div</button>
            </form>
            <form onClick={handleH1}>
                {/* <input type="text" onChange={(e) => setH1Text(e.target.value)}/> */}
                <button type="submit" name="h1" >h1</button>
            </form>
            <form onClick={handleP}>
                <button type="submit" name="p" >p</button>
            </form>
        </>

    );
};
    
export default TagGenerator;

    // function allElementsFromPoint(x, y) {
    //     var element, elements = [];
    //     var old_visibility = [];
    //     while (true) {
    //         element = document.elementFromPoint(x, y);
    //         if (!element || element === document.documentElement) {
    //             break;
    //         }
    //         elements.push(element);
    //         old_visibility.push(element.style.visibility);
    //         element.style.visibility = 'hidden'; // Temporarily hide the element (without changing the layout)
    //     }
    //     for (var k = 0; k < elements.length; k++) {
    //         elements[k].style.visibility = old_visibility[k];
    //     }
    //     elements.reverse();
    //     return elements;
    // }
