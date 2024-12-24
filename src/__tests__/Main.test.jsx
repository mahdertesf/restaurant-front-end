// src/__tests__/Main.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Main from '../components/Main';
import BookingForm from '../components/BookingForm';

jest.mock('../components/BookingForm', () => jest.fn(() => <div>Mocked BookingForm</div>));

describe('Main Component', () => {
  const mockSetDate = jest.fn();
  const mockSetTime = jest.fn();
  const mockSetGuests = jest.fn();
  const mockSetOccasion = jest.fn();

  beforeEach(() => {
    render(
      <Main
        className="test-class"
        date="2023-10-10"
        setDate={mockSetDate}
        time="17:00"
        setTime={mockSetTime}
        guests="2"
        setGuests={mockSetGuests}
        occasion="Birthday"
        setOccasion={mockSetOccasion}
      />
    );
  });

  test('renders Main component with BookingForm', () => {
    expect(screen.getByText('Mocked BookingForm')).toBeInTheDocument();
  });

  test('initializes available times correctly', () => {
    expect(screen.getByText('Mocked BookingForm')).toBeInTheDocument();
    expect(BookingForm).toHaveBeenCalledWith(
      expect.objectContaining({
        availableTimes: { availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] },
      }),
      {}
    );
  });

  test('updates available times on dispatch', () => {
    const { dispatch } = BookingForm.mock.calls[0][0];
    dispatch({ type: 'updateTimes', payload: '17:00' });

    render(
      <Main
        className="test-class"
        date="2023-10-10"
        setDate={mockSetDate}
        time="17:00"
        setTime={mockSetTime}
        guests="2"
        setGuests={mockSetGuests}
        occasion="Birthday"
        setOccasion={mockSetOccasion}
      />
    );

    expect(BookingForm).toHaveBeenCalledWith(
      expect.objectContaining({
        availableTimes: { availableTimes: ["18:00", "19:00", "20:00", "21:00", "22:00"] },
      }),
      {}
    );
  });

  test('resets available times on dispatch', () => {
    const { dispatch } = BookingForm.mock.calls[0][0];
    dispatch({ type: 'resetTimes' });

    render(
      <Main
        className="test-class"
        date="2023-10-10"
        setDate={mockSetDate}
        time="17:00"
        setTime={mockSetTime}
        guests="2"
        setGuests={mockSetGuests}
        occasion="Birthday"
        setOccasion={mockSetOccasion}
      />
    );

    expect(BookingForm).toHaveBeenCalledWith(
      expect.objectContaining({
        availableTimes: { availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] },
      }),
      {}
    );
  });
});