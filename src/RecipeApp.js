import React, { Component } from 'react';
import './RecipeApp.css';
import Recipe from './Recipe.js';
// import Navbar from './Navbar.js';

class RecipeApp extends Component {
  
  static defaultProps = {
    recipes: [{
      name: 'Pasta!',
      ingredients: ['flour', 'water'], 
      instructions: 'This is how we make pasta!',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Espagueti_de_Pasta_Fresca_al_Huevo.jpg'
    }]
  }

  render() {
    return (
      <div className="RecipeApp">
        {/* <Navbar /> */}
        {this.props.recipes.map((recipe, index) => (
          <Recipe key={index} {...recipe} />
        ))}
      </div>
    );
  }
}

export default RecipeApp;
