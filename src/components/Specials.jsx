import React from 'react';
import Card from "./Card.jsx";

const Specials = () => {
    return (
        <div id={"specials"}>
            <div id={"specials-header"}>
                <h1>This Week's Special</h1>
                <button className={'primary-btn'} id={'online-menu'}>Online Menu</button>
            </div>
            <div className={"card-wrapper"}>
                <Card name={"Greek Salad"} price={12.99}
                      desc={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons."}
                      imageSrc={"/greek salad.jpg"}
                      imageDescription={"greek salad"}></Card>
                <Card name={"Greek Salad"} price={12.99}
                      desc={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons."}
                      imageSrc={"/greek salad.jpg"}
                      imageDescription={"greek salad"}></Card>
                <Card name={"Greek Salad"} price={12.99}
                      desc={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons."}
                      imageSrc={"/greek salad.jpg"}
                      imageDescription={"greek salad"}></Card>
            </div>
        </div>
    );
};

export default Specials;