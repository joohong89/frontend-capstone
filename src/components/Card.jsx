import React from 'react';

const Card = ({name, desc, price, imageSrc, imageDescription}) => {
    return (
        <div className={"card"}>
            <img src={imageSrc} alt={imageDescription}></img>
            <div className="card-name">
                <div className={"card-name-name"}>{name}</div>
                <div className={"card-name-price"}>${price}</div>
            </div>
            <div className={"card-desc"}>{desc}</div>
            <div className={"card-order"}>
                <span>Order a delivery</span>
            </div>
        </div>
    );
};

export default Card;