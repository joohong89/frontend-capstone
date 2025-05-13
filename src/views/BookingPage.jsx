import React, {useState} from 'react';
import BookingForm from "../components/BookingForm.jsx";

const BookingPage = ({availableTime, dispatch}) => {
    const [data, setData] = useState({
        resTime: '',
        resDate: '',
        guests: '',
        occasion: ''
    });

    function handleChange(e) {
        const {name, value} = e.target;
        dispatch({ type: 'update_times', date: value });
        setData((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(availableTime);
    }

    return (
        <div className="booking-page">
            <BookingForm data={data} handleChange={handleChange} availableTime={availableTime} handleSubmit={handleSubmit} dispatch={dispatch}></BookingForm>
        </div>
    );
};

export default BookingPage;