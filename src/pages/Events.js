import React, { useState, useEffect } from 'react';
import moment from 'moment';
// material
import { Container, Stack, Typography } from '@material-ui/core';
// components
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Page from '../components/Page';

// ----------------------------------------------------------------------

// ID for WAI public calendar
const calendarId = '16gnvov94ele73k1e7ekbaqr08@group.calendar.google.com';
// Used for time localisation.
const localizer = momentLocalizer(moment);

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          // Something has gone wrong with fetching calendar data
        } else {
          const resEvents = result.items;
          const rbcEvents = [];
          // Iterate through events received from google calendar API and format into RBC format.
          resEvents.forEach((event) => {
            const rbcEvent = {
              title: event.summary,
              start: new Date(event.start.dateTime),
              end: new Date(event.end.dateTime)
            };
            rbcEvents.push(rbcEvent);
          });
          setEvents(rbcEvents);
        }
      });
  }, []);

  return (
    <Page title="Events">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Events
          </Typography>
        </Stack>
        {/* TO-DO: make the height responsive */}
        <div style={{ height: 600 }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            tooltipAccessor={(event) => event.title}
          />
        </div>
      </Container>
    </Page>
  );
}

export default Events;
