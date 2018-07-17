import React, { Component } from 'react';
import './App.css';

import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = "7627ba0144268c5f9e20917cc00f1a48";


class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
    //the api does not give information to servers running on a localhost
    //thats why theres the heroku link infront of the api url
    //it tricks the site into thinking, that my site is actually on a server
    //in the web
    const data = await api_call.json();
    this.setState({
      recipes: data.recipes
    });
    console.log(this.state.recipes)
  }
  componentDidMount = () =>{
  const json = localStorage.getItem("recipes");
  const recipes = JSON.parse(json);
 this.setState({recipes});

  }
  
  
  
  
  //whatever happens in this method happens as soon as the component updates, ioe when state changes
  componentDidUpdate = () => {
  const recipes = JSON.stringify(this.state.recipes);
  localStorage.setItem("recipes", recipes)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">recipe search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
       <Recipes recipes={this.state.recipes}/>
      </div>                                               
    );                                                  //<Recipes !recipes=! is a prop
  }                                                  
}

export default App;
