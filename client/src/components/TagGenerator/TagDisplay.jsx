import React from 'react';
import './TagStyle.css';


const TagDisplay = (props) => {
    // const {toUpdate ,  setToUpdate} = props;

    // document.addEventListener('click', function(e) {
    //     console.log(document.elementFromPoint(e.pageX, e.pageY)); 
    //     var elem = document.elementFromPoint(e.pageX, e.pageY);
    //     setToUpdate(elem.id);
    //     console.log(toUpdate); 
    // })

    return (
        <>
            { props.frontEnds.map( (tag, i) => <div>
            <div
            style={{
                width: tag.width+'px',
                height: tag.height+'px',
                color: tag.color,
                backgroundColor: tag.BGColor,
                border: "1px solid black",
                cursor: "pointer",
                display: "flex",
                
            }}
            key={ i } className="frontendHolder" id={tag._id} dangerouslySetInnerHTML={{ __html: tag.html }}></div>
            </div>
            )}
        </>
    );
};
    
export default TagDisplay;

