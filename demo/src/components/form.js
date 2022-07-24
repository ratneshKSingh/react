import React, { useState, useEffect } from "react";

const Form = () => {

    const [ formState, setFormState ] = useState({
        firstName: '',
        secondName: ''
    });

    const onChangeHandler = ( e ) => {
        setFormState({
            ...formState,
            [ e.target.name ]: e.target.value
        });
        console.log(e.target.value);
    }

    useEffect(() => {
        console.log(formState);
    }, [ formState ])

    return (
        <form style={{textAlign: 'center', marginTop: '40px'}}>
            <div>
                <label>First Name</label><br/>
                <input type="text" value={ formState.firstName } name="firstName" onChange={ onChangeHandler }/>
            </div>
            <div>
                <label>Second Name</label><br/>
                <input type="text" value={ formState.secondName }  name="secondName" onChange={ onChangeHandler } />
            </div>        
        </form>
    )
}

export default Form;