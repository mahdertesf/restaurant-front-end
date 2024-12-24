// src/__tests__/BookingForm.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from '../components/BookingForm';

describe('BookingForm Component', () => {
  const mockSetDate = jest.fn();
  const mockSetTime = jest.fn();
  const mockSetGuests = jest.fn();
  const mockSetOccasion = jest.fn();
  const mockDispatch = jest.fn();
  const availableTimes = { availableTimes: ['12:00', '13:00', '14:00'] };

  beforeEach(() => {
    render(
      <BookingForm
        className="test-class"
        date="2023-10-10"
        setDate={mockSetDate}
        time="12:00"
        setTime={mockSetTime}
        guests="2"
        setGuests={mockSetGuests}
        occasion="Birthday"
        setOccasion={mockSetOccasion}
        availableTimes={availableTimes}
        dispatch={mockDispatch}
      />
    );
  });

  test('renders BookingForm component', () => {
    expect(screen.getByText('Book Here')).toBeInTheDocument();
  });

  test('calls setDate on date input change', () => {
    fireEvent.change(screen.getByLabelText(/Choose Date/i), { target: { value: '2023-10-11' } });
    expect(mockSetDate).toHaveBeenCalledWith('2023-10-11');
  });

  test('calls setTime and dispatch on time select change', () => {
    fireEvent.change(screen.getByLabelText(/Choose Time/i), { target: { value: '13:00' } });
    expect(mockSetTime).toHaveBeenCalledWith('13:00');
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'updateTimes', payload: '13:00' });
  });

  test('calls setGuests on guests input change', () => {
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: '3' } });
    expect(mockSetGuests).toHaveBeenCalledWith('3');
  });

  test('calls setOccasion on occasion select change', () => {
    fireEvent.change(screen.getByLabelText(/Occasions/i), { target: { value: 'Anniversary' } });
    expect(mockSetOccasion).toHaveBeenCalledWith('Anniversary');
  });
});