import React, { useState, useEffect } from "react";
import TagDisplay from "../components/TagGenerator/TagDisplay";
import TagGenerator from "../components/TagGenerator/TagGenerator";
import axios from "axios";
var elementFromPoint = require("element-from-point")
const DisplayContainer = (props) => {
    const [frontEnds, setFrontEnds] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [toUpdate, setToUpdate] = useState();

    // document.addEventListener('click', function(e) {
    //     console.log(document.elementFromPoint(e.pageX, e.pageY)); 
    //     var elem = document.elementFromPoint(e.pageX, e.pageY);
    //     setToUpdate(elem.id);
    //     console.log(toUpdate); 
    // })



    document.addEventListener("mousedown", function(ev) {
    var el = elementFromPoint(ev.clientX, ev.clientY)
    setToUpdate(el.id);
    console.log(toUpdate);
    })

    useEffect(() => {
    axios.get("http://localhost:8000/api/frontEnds")
        .then((res) => {
            setFrontEnds(res.data);
            setLoaded(true);
        })
        .catch((err) => console.error(err));
    }, []);

  // const removeFromDom = productId => {
  //     setProducts(products.filter(product => product._id !== productId));
  // }

    const createFrontEnd = (frontEnd) => {
        axios
        .post("http://localhost:8000/api/frontEnds", frontEnd)
        .then((res) => {
            setFrontEnds([...frontEnds, res.data]);
        })
        .catch((err) => console.error(err));
    };

    const updateFrontEnd = (newTag) => {
        // console.log(toUpdate, "this should be the id");
        axios.put("http://localhost:8000/api/frontEnds/63ad40481c6e624398feb4b3", newTag)
        .then((res) => {
            console.log(toUpdate + "the updated is ");
        })
        .catch((err) => console.error(err));
    };

    const styling = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: "50px",
    };
    const styling2 = {
        backgroundColor: "grey",
        width: "900px",
        height: "500px",
    };

    return (
        <>
        <div>
            <TagGenerator
            onNewFrontEnd={createFrontEnd}
            onNewUpdate={updateFrontEnd}
            />
        </div>
        <div style={styling}>
            <div style={styling2}>
            {loaded && (
                <TagDisplay
                // toUpdate={toUpdate}
                // setToUpdate={setToUpdate}
                frontEnds={frontEnds}
                />
            )}
            </div>
        </div>
        </>
    );
};
export default DisplayContainer;
