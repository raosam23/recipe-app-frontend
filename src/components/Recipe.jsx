import React from "react";

export default function Recipe(props) {
    const {showTitle, dishName, recipe} = props;
  return (
    <div>
      {showTitle && (
        <>
          <h2>{`The recipe for ${dishName} is : `}</h2>
          <p>{JSON.stringify(recipe)}</p>
        </>
      )}
    </div>
  );
}
