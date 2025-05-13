import React, {useEffect, useState} from 'react';
import BookingForm from "../components/BookingForm.jsx";

const BookingPage = ({availableTime, dispatch, submitForm}) => {
    const [data, setData] = useState({
        resTime: '',
        resDate: '',
        guests: '',
        occasion: ''
    });

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
    }, [data]);


    function handleChange(e) {
        const {name, value} = e.target;
        dispatch({ type: 'update_times', date: value });
        setData((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        submitForm(e.target);
    }

    return (
        <div className="booking-page">
            <BookingForm data={data} handleChange={handleChange} availableTime={availableTime} handleSubmit={handleSubmit} dispatch={dispatch}></BookingForm>
        </div>
    );
};

export default BookingPage;