import React, {Component} from 'react';
import './Recipe.css'

class Recipe extends Component {
  static defaultProps = {
    name: 'A recipe',
    ingredients: ['1st ingredient', '2nd ingredient', '...'],
    instructions: 'Coming soon',
    image: 'http://baconmockup.com/450/300'
  }

  render() {
    const { name, ingredients, instructions, image } = this.props;
    return (
      <div className="recipe-card">
        <div className="image-container">
          <img src={ image } alt={ name }/>
        </div>
        <h2>{ name }</h2>
        <h3>Ingredients</h3>
        <ul>
          {
            ingredients.map((indgredient, index) => {
              return <li key={ index }>{ indgredient }</li>
            })
          }
        </ul>
        <h3>Instructions</h3>
        <p>{ instructions }</p>
      </div>
    );
  }
}

export default Recipe;