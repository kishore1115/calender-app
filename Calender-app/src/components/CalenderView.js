// src/components/UserModule/CalendarView.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    alert(`Selected date: ${date.toLocaleDateString()}`);
  };

  return (
    <div className="calendar-container">
      <h2>Calendar View</h2>
      <Calendar onClickDay={handleDateClick} />
      {selectedDate && (
        <div className="selected-date">
          <p>You selected: {selectedDate.toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default CalendarView;
