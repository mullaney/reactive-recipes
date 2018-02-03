import React, { Component } from 'react';
import './RecipeApp.css';
import Recipe from './Recipe.js';
import recipeData from './recipe_data.js'
import Navbar from './Navbar.js';

class RecipeApp extends Component {
  
  static defaultProps = {
    recipes: recipeData
  }

  render() {
    return (
      <div className="RecipeApp">
        <Navbar />
        <div id="recipe-list">
          {this.props.recipes.map((recipe, index) => (
            <Recipe key={index} {...recipe} />
          ))}
        </div>
      </div>
    );
  }
}

export default RecipeApp;
