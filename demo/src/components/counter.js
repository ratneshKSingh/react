import React, { useState } from "react";

const Counter = ( props ) => {
    return <>
    <p>{ props.count }</p>
    <button onClick={ props.increment }>Incremenet</button>
    </>
}

export default Counter;