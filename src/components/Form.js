import React from "react";

//from wont use state, so it can be a statless component
const Form = (props) => (                      //props refers to <Form getRecipe={this.getRecipe}
    <form onSubmit={props.getRecipe} style={{ marginBottom:"2rem" }}>
        <input className="form__input" type="text" name="recipeName" />                    {/*need to set up a name attribute, it will be used to read value of input*/}
        <button className="form__button">Search </button>
    </form>

)


export default Form;

