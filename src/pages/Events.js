import React, { useState, useEffect } from 'react';
// material
import { Container, Stack, Typography } from '@material-ui/core';
// components
import Calendar from '@ericz1803/react-google-calendar';
import Page from '../components/Page';

// ----------------------------------------------------------------------

// ID for WAI public calendar
const calendarId = '16gnvov94ele73k1e7ekbaqr08@group.calendar.google.com';
const calendars = [{ calendarId, color: '#207f76' }]; // Color set to WAI Green

const calendarStyles = {
  calendar: {
    borderWidth: 5,
    borderRadius: 10,
    borderColor: '#f6f6f6'
  },
  today: {
    backgroundColor: '#ececec'
  }
};

function Events() {
  return (
    <Page title="Events">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Events
          </Typography>
        </Stack>
        {/* TO-DO: make the height responsive */}
        <Calendar
          calendars={calendars}
          apiKey={process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY}
          styles={calendarStyles}
        />
      </Container>
    </Page>
  );
}

export default Events;
