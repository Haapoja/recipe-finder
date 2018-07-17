import React,{Component} from "react";
import {Link} from "react-router-dom";

const API_KEY = "7627ba0144268c5f9e20917cc00f1a48";
class Recipe extends React.Component{
    state = {
        activeRecipe: []
    }
    //this method gets fired as soon as the recipe component get loaded or mounted on the browser
    //anything in it happens as soon as the component loads
    componentDidMount = async () =>{       
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        const res = await req.json();
      this.setState({
          activeRecipe:res.recipes[0]
      });
      console.log(this.state.activeRecipe)
    }
    render(){
        const recipe = this.state.activeRecipe; //makes things easier, now i can just write recipe, instead of this.state..blabla
        return(
      //and operator=both conditions have to be true for something to execute
      //if activerecipe length is not 0, then render out the recipe crap
      //before "this.state.activeRecipe.length" everytime you were on the recipe page
      //all the fields were empty for a few seconds      
        <div className="container">
       { this.state.activeRecipe.length !== 0 &&
        <div className="active-recipe">
        <img className="active-recipe__img" src={recipe.image_url} alt={recipe.recipe_id}/>
        <h3 className="active-recipe__title">{recipe.title} </h3>
        <h4 className="active-recipe__publisher"> 
        Publisher: <span>{recipe.publisher} </span>
        </h4>
        <p className="active-recipe__website"> <span><a href={recipe.source_url}>{recipe.source_url} </a></span></p>
        <button className="active-recipe__button">
       <Link to="/">Home</Link>
        </button>
        </div>
          

       }
        </div>

        )
    }
}



export default Recipe;