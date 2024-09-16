import React, { useState } from 'react'
import Recipe from './Recipe';

export default function Form(props) {
    const {dishName, setDishName} = props;
    const [showTitle, setShowTitle] = useState(false)
    const [recipe, setRecipe] = useState({});

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        console.log(`Data recieved : ${dishName}`);
        try {
            const dataJson = await fetch(`http://localhost:8000/routes/search?dishName=${dishName}`);
            const dataObj = await dataJson.json();
            setRecipe(dataObj);
        }
        catch(err) {
            alert(err);
            console.log(err);
        }
        setShowTitle(true);
      }
    
      const handleOnChange = (event) => {
        setDishName(event.target.value);
      }
    return (
    <>
    <form onSubmit={handleOnSubmit}>
        <label>DishName : <input type='text' name='dishname' value={dishName} onChange={handleOnChange} /></label>
        <input type='submit' value='submit'/>
        <Recipe showTitle={showTitle} dishName={dishName} recipe={recipe}/>
    </form>
    </>
  )
}
