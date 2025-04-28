import React from 'react';
import Chicago from "./Chicago.jsx";

const CallToAction = () => {
    return (
        <div id={"call-to-action"}>
            <Chicago></Chicago>
            <div id={"action-img-wrapper"}>
                <img src="/restauranfood.jpg" className={'restaurant-img'} alt="restaurnt food"/>
            </div>
        </div>
    );
};

export default CallToAction;