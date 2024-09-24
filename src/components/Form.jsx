import React, { useContext } from "react";
import Recipe from "./Recipe";
import DishContext from "../context/Dish/DishContext";

export default function Form() {
  const context = useContext(DishContext);
  const { dishName, setDishName, setShowTitle, setRecipe } = context;

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    console.log(`Data recieved : ${dishName}`);
    try {
      const dataJson = await fetch(
        `http://localhost:8000/routes/search?dishName=${dishName}`,
      );
      const dataObj = await dataJson.json();
      if (dataObj.msg === "Meal not found") {
        setShowTitle(false);
        alert("Meal not found");
      } else {
        setShowTitle(true);
        setRecipe(dataObj);
      }
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  const handleOnChange = (event) => {
    setDishName(event.target.value);
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <label>
          DishName :{" "}
          <input
            type="text"
            name="dishname"
            value={dishName}
            onChange={handleOnChange}
          />
        </label>
        <input type="submit" value="submit" />
        <Recipe />
      </form>
    </>
  );
}
