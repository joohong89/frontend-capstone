import React, {useReducer} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import HomePage from "../views/HomePage.jsx";
import BookingPage from "../views/BookingPage.jsx";
import {fetchAPI, submitAPI} from "../services/apis.js";
import ConfirmedBooking from "./ConfirmedBooking.jsx";


const Main = () => {
    const navigate = useNavigate();

    const updateTimes = (state, action) => {
        // action will contain the selected date
        const selectedDate = action.date;
        return fetchAPI(new Date(selectedDate));
    };

    const initializeTimes = () => {
        return fetchAPI(new Date());
    }

    const submitForm = (formData) => {
        const res = submitAPI(formData)

        if(res) {
            const bookings = localStorage.getItem("bookings");
            if(bookings) {
                const bookingsArr = JSON.parse(bookings);

                bookingsArr.push(formData)

                localStorage.setItem("bookings", bookingsArr);

            } else {
                localStorage.setItem("bookings", [formData]);
            }





            navigate('/confirm')
        }
    }

    const [availableTime, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/booking" element={<BookingPage availableTime={availableTime} dispatch={dispatch}  submitForm={submitForm}/>} />
                <Route path="/confirm" element={<ConfirmedBooking/>} />
            </Routes>
        </>
    );
};

export default Main;