import { useEffect, useRef } from 'react';

    const CssManager = (props) => {
        const headRef = useRef(null);

        useEffect(() => {
    // Get the head element using the ref
        const head = headRef.current;

    // Update the style of the class ".my-class"
            head.querySelector('.my-class').style.backgroundColor = 'red';
        }, []);

    return (
        <head ref={headRef} id="head">
        <style>

        </style>
        </head>
    );
}
export default CssManager;
