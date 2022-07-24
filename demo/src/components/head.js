import React from 'react';

const Head = ( props ) => {
    return <>
        <h1>{ props.heading }</h1>
        <p>{ props.description }</p>
    </>
}

export default Head;