import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../views/HomePage.jsx";
import BookingPage from "../views/BookingPage.jsx";

const Main = () => {
    return (
        <>
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>}></Route>
                        <Route path="/booking" element={<BookingPage/>}></Route>
                    </Routes>
                </BrowserRouter>
            </main>
        </>
    );
};

export default Main;