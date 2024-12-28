import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarView = ({ communications }) => {
    const events = communications.map(comm => ({
        title: comm.type,
        date: comm.date,
    }));

    return (
        <div>
            <h2>Calendar View</h2>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
            />
        </div>
    );
};

export default CalendarView;