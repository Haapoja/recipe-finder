import React from "react";

import { Link } from "react-router-dom";  //works like an anchor tag in html

const Recipes = props => (
    <div className="container">
         <div className="row">
         {props.recipes.map((recipe) => {
          return (
               <div className="col-md-4" key={recipe.recipe_id} style={{marginBottom: "2rem"}}>
               <div className="recipes__box">
               <img className="recipe__box-img" 
               src={recipe.image_url} 
               alt={recipe.title}/>
               <div className="recipe__text">
              <h5 className="recipes__title">
              { recipe.title.length < 20 ? `${recipe.title}`: `${recipe.title.substring(0, 25)}...` }{/*if title is smaller than 20 chars, show title, else trim the name to 25*/}
              </h5>                                                                                     {/*this is so the rcipe boxes are the same length, longer name, longer box*/}
              <p className="recipes__subtitle">Publisher: 
              <span>
                  {recipe.publisher}
                  </span> </p>
               </div>
               <button className="recipe_buttons">
               <Link to={{ 
                   pathname: `/recipe/${recipe.recipe_id}`,
                   state: { recipe: recipe.title }
                    }}>View recipe </Link>
               </button>
               </div>
               </div>
              );                                  
            })}        
        </div>
    </div>

    //the key needs to be in the parent element to avoid errors
    //{} in jsx = javascript expression
    //map method needed, goes through elements in a array
    //the api data is an array.  //map can take a callback function and a argument



)

export default Recipes