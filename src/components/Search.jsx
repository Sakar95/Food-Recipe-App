import React, { useEffect, useState } from 'react';
import RecipeItem from './RecipeItem';
import { FaSearch } from 'react-icons/fa';



export default function Search() {
    
    const App_Id = "96eb5602"
    // const App_Key = process.env.REACT_APP_RECIPE_KEY
    const App_Key = "5e785b99901b3055229be5d7cd508120"

    const [info, setInfo] = useState([]);
    const [input, setInput] = useState("")
    const [food, setFood] = useState("chicken")


    useEffect(() => {
        getRecipes()
    }, [food])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${food}&app_id=${App_Id}&app_key=${App_Key}`)

        const data = await response.json();
        setInfo(data.hits)
        console.log(data.hits)
    }

    function handleChange(event) {
        setInput(event.target.value)
    }

    function handleClick(e) {
        setFood(input)
        setInput(e.target.placeholder)
        console.log(input)
        e.preventDefault()
    }


    return (

        <div className="recipe-box" id="recipe">
            <div className='search'>
                <form className='search-form'>
                    <input onChange={handleChange} className="search-bar" type="text" placeholder='Search here' />
                    <button className='srch-button' onClick={handleClick}>{<FaSearch/>}</button>

                </form>

                {info.map((item,index) => (
                    <RecipeItem
                        image={item.recipe.image}
                        name={item.recipe.label}
                        mealType={item.recipe.mealType}
                        ingredients={item.recipe.ingredients}
                        key={index}
                    />
                ))}

            </div>
        </div>


    )
}
