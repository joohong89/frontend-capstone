import React, {useReducer} from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../views/HomePage.jsx";
import BookingPage from "../views/BookingPage.jsx";
import {fetchAPI} from "../services/apis.js";


const Main = () => {
    const updateTimes = (state, action) => {
        // action will contain the selected date
        const selectedDate = action.date;
        return fetchAPI(new Date(selectedDate));
    };

    const initializeTimes = () => {
        return fetchAPI(new Date());
    }

    const [availableTime, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/booking" element={<BookingPage availableTime={availableTime} dispatch={dispatch}/>} />
            </Routes>
        </>
    );
};

export default Main;