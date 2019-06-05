import React from 'react';
import App from './App';


export default function FoodItem (props) {
    console.log(props);
    return (
        <p>{props.foodItem}</p>
    )
}
