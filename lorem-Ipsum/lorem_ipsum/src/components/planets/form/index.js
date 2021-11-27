import React, {Fragment, useState, useEffect} from "react";


const Form = (props) => {
    const [name, setName] = useState('');
    const handleChange = (event) => setName(event.target.value);
    const handleSubmit = event => {
        props.addPlanet({name: name})
        
        //evita o recarregamento defaut
        event.preventDefault();

    }

    return(
    <Fragment>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlfor="name">Name: </label>
                <input id="name" type="text" value={name} onChange={handleChange}/>
            </div>
            <br/>
            <input type="submit"/>
        </form>
    </Fragment>
)

}

export default Form;