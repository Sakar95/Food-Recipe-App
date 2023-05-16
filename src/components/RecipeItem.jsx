import React from 'react'

export default function RecipeItem(props) {

  return (
    
    <div className='item-recipe' >
      <div className="main-info">
        <img src={props.image} alt="" />
        
      <div className="sub-info">
      <h2 className='title'>{props.name}</h2>
        <span>Meal Type :  {props.mealType}</span>
      </div>
      </div>

      <div className="ingredients">
        <ol>
          {props.ingredients.map((ig,index) => (
            <li>{index+1}. {ig.text}</li>
            
          ))}
        </ol>

      </div>


    </div>
  )
}
