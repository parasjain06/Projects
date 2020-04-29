import React from 'react'
const Recipe = ({title,calorie,image,ingredients}) => {

    return (
        <div>
            <h1>{title}</h1>
            <ol>
            {ingredients.map(ingredient =>(
                <li>{ingredient}</li>
            ))}
            </ol>
            <p>{calorie}</p>
            <img src={image} alt=""></img>
            
        </div>
    );
}

export default Recipe