import React from 'react';

const Content = ( props ) => {
    return <div className="content">
        <p>{ props.content }</p>
        <h3>{ props.author }</h3>
    </div>
}

export default Content;