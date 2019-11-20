import React from 'react';
import './Card.css'
const Card = (props) => {
    return (
        <div>
            <p>{props.Movies.title}</p>
            <p>{props.Movies.year}</p>
            <p>{props.Movies.director}</p>
            <p>{props.Movies.duration}</p>
            <p>{(props.Movies.genre).join(',')}</p>
            <p>{props.Movies.rate}</p>
        </div>
    );
}
 
export default Card;