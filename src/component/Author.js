import React from 'react';

const Author = (props) => {   
    return(       
        <li onClick={props.listClick}> {props.name}</li>
    )
}

export default Author