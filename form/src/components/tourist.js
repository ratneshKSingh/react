const Tourist = ( props ) => {

    return <>
    {
        props.allTourist.length === 0 ? <h3 style={{ textAlign: 'center'}}>No Tourist Added</h3> : props.allTourist.map( (tourist, index) => {
            return <div key={ index }>
                Email: { tourist.email || 'Email not added' } <br/>
                Gender: { tourist.gender} <br/>
                State: { tourist.state || 'No state Selected'} <br/>
                { tourist.visitedPlaces.length === 0 ? null : <>Visited Places: { tourist.visitedPlaces} </> }
                 <br/><br/>
                <hr/>
            </div>
        })
    }
    </>
}

export default Tourist;
