import React from "react";

export default function Recipe(props) {
    const {showTitle, dishName, recipe} = props;
    console.log(showTitle);
    const {meal, category, country, instructions, image, youtubeLink, ingrediants} = recipe;
    console.log(meal);
    console.log(category);
    console.log(country);
    console.log(instructions);
    console.log(youtubeLink);
    console.log(ingrediants);
    console.log(typeof(recipe))
  return (
    <div>
      {showTitle && (
        <>
          <h2>{`The recipe for ${meal} is : `}</h2>
          <img style={{width:"250px", height:"250px"}} src={image} alt={dishName} />
          <br />
          <h3>Type of Dish</h3>
          <b>Category: </b>{category} <br />
          <b>Country: </b>{country} <br />
          <h3>Ingrediants</h3>
          <ul>
            {ingrediants.map((item, index)=>{
              return(
                <li key={index}>{item}</li>
              )
            })}
          </ul>
          <h3>Instructions</h3>
          {instructions}
          <br />
          <br />
          <b>Youtube link for reference: </b> <a href={youtubeLink}>{meal}'s cooking recipe video</a>
        </>
      )}
    </div>
  );
}
