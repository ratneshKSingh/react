const { useState } = require("react");

const initialState = {
    email: '',
    gender: '',
    state: '',
    visitedPlaces: []
}


const Form = (props) => {
    const [formState, setFormState] = useState(initialState);
    const [errors, setErrors] = useState({
        email: {
            validation: ['required'],
            error: null
        },
        gender: {
            validation: ['required'],
            error: null
        },
        state: {
            validation: ['required'],
            error: null
        },
        visitedPlaces: {
            validation: ['required'],
            error: null
        }
    });

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const key = e.target.name;
        if (key === 'visitedPlaces') {
            let visitedArray = [...formState.visitedPlaces];
            if (e.target.checked) {
                if (formState.visitedPlaces.includes(value)) {
                } else {
                    visitedArray = [...formState.visitedPlaces, value]
                }
            } else {
                visitedArray = formState.visitedPlaces.filter(v => v !== value);
            }
            const newState = {
                ...formState,
                visitedPlaces: visitedArray
            }
            checkErrors(newState, key);
            setFormState(newState);
            return;
        }
        const newState = {
            ...formState,
            [key]: value
        }
        checkErrors(newState, key);
        setFormState(newState);
    }

    const checkErrors = (newState, key) => {
        const newErrorState = { ...errors };
        const value = newState[key];
        const validations = errors[key].validation;
        validations.forEach(validation => {
            if (validation === 'required') {
                if (Array.isArray(value)) {
                    if (!value.length) {
                        newErrorState[key].error = {
                            required: true
                        }
                    } else {
                        if (newErrorState[key].error?.required === true) {
                            newErrorState[key].error.required = false
                        }
                    }
                } else {
                    if (!value) {
                        newErrorState[key].error = {
                            required: true
                        }
                    } else {
                        if (newErrorState[key].error?.required === true) {
                            newErrorState[key].error.required = false
                        }
                    }
                }
            }
        });
        setErrors(newErrorState);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        props.save(formState);
    }
    return (
        <form onSubmit={formSubmit}>
            Email: <input type="text" name="email" onChange={onChangeHandler} /><br />
            {errors.email.error?.required ? <p style={{ color: 'red' }}>Email is Required</p> : null}
            Gender: <input type="radio" name="gender" onChange={onChangeHandler} value="male" /> Male
            <input name="gender" type="radio" onChange={onChangeHandler} value="female" /> Female<br />
            {errors.gender.error?.required ? <p style={{ color: 'red' }}>Email is Required</p> : null}

            State: <select onChange={onChangeHandler} name="state">
                <option>Not Selected</option>
                <option value="kerela">Kerala</option>
                <option value="karnataka">Karnataka</option>
                <option value="punjab">Punjab</option>
            </select><br />
            {errors.state.error?.required ? <p style={{ color: 'red' }}>Email is Required</p> : null}

            Visited Places: <input type="checkbox" name="visitedPlaces" onChange={onChangeHandler} value="delhi" /> Delhi <input type="checkbox" value="chandigarh" name="visitedPlaces" onChange={onChangeHandler} /> Chandigarh <br />
            <button type="submit">Submit</button>
            {errors.visitedPlaces.error?.required ? <p style={{ color: 'red' }}>Email is Required</p> : null}
        </form>
    )
}

export default Form;