import {fireEvent, render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import BookingForm from "./BookingForm.jsx";
import Main from "./Main.jsx";

test('test for initializeTime', () => {
    render(<MemoryRouter initialEntries={['/booking']}>
            <Main />
        </MemoryRouter>);

    // Wait for all options to appear
    const options = screen.getAllByTestId('booking-time-option');
    expect(options.length).toBeGreaterThan(0); // Because updateTimes returns 7 time options
})

test('test for updateTimes', () => {
    render(<MemoryRouter initialEntries={['/booking']}>
        <Main />
    </MemoryRouter>);

    const date = screen.getByLabelText(/date/);
    fireEvent.change(date, { target: { value: '2025-04-01' } });
    fireEvent.blur(date);

    const data = localStorage.getItem('data');
    const formData = JSON.parse(data);

    expect(formData.resDate).toEqual('2025-04-01');

    const options = screen.getAllByTestId('booking-time-option');
    expect(options.length).toBeGreaterThan(0); // Because updateTimes returns 7 time options
})