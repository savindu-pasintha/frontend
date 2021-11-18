import React from 'react';
import { Link } from 'react-router-dom'
import './Card.css'

function Card({ src, title, description, price ,startDate,key}) {
    const dataUrl="/view?image=a&name="+title+"&price="+price+"&details="+description;
    return (
        <div className='card' key={1}>
            <img width="300px" height="400px" src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
                <button id="btnStyle"><Link to={dataUrl} >View</Link></button>
            </div>
        </div>
    )
}

export default Card;