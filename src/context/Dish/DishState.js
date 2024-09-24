import { useState } from "react";
import DishContext from "./DishContext";

const DishState = (props) => {
    const [dishName, setDishName] = useState("")
    const [showTitle, setShowTitle] = useState(false);
    const [recipe, setRecipe] = useState({});

    return (
        <DishContext.Provider value={{dishName, setDishName, showTitle, setShowTitle, recipe, setRecipe}}>
            {props.children}
        </DishContext.Provider>
    );
}

export default DishState;