import React from 'react';
import {Link} from "react-router-dom";

const Chicago = () => {


    return (
        <div id={"chicago"}>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <span> We are a family owned Mediterranean Restaurant, focused on traditional recipes served with a modern twist.</span>
            <Link className={"primary-btn"} to="/booking"> Reserve a Table</Link>

        </div>
    );
};

export default Chicago;