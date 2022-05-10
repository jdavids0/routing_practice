import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Number = () => {

    const { id, color1, color2 } = useParams();

    return(
        <>
        {
            isNaN(id) ?
            <div style={{ backgroundColor:color2 }}>
                <h1 style={{ color:color1 }}>The word is: { id }</h1>
            </div> :
            <h1>The number is: { id }</h1>
        }
        </>
    )

}

export default Number;

