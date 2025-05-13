import React from 'react';

const BookingForm = ({data, handleChange, availableTime, handleSubmit}) => {

    const onChangeHandler = (e) => {
        handleChange(e)
    }

    return (
        <>
            <h2 style={{textAlign: 'center'}}>Book Now</h2>
            <form className={"booking-form"} style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={handleSubmit}>
                <label htmlFor="resDate">Choose date</label>
                <input type="date" id="resDate" name="resDate" value={data?.resDate} onChange={handleChange}/>
                <label htmlFor="resTime">Choose time</label>
                <select id="resTime" name="resTime" value={data?.resTime} onChange={handleChange}>
                    {
                        availableTime?.map((item, index) => <option data-testid="booking-time-option" key={index}>{item}</option>)
                    }
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={data?.guests} onChange={handleChange}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occasion" value={data?.occasion} onChange={handleChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </>
    );
};

export default BookingForm;