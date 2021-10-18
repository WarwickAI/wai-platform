import React, { useState, useEffect } from 'react';
// material
import { Container, Stack, Typography } from '@material-ui/core';
// components
import Calendar from '@ericz1803/react-google-calendar';
import Page from '../components/Page';

// ----------------------------------------------------------------------

// ID for WAI public calendar
const calendarId = '16gnvov94ele73k1e7ekbaqr08@group.calendar.google.com';

const calendars = [{ calendarId }];

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
        <div style={{ height: 600 }}>
          <Calendar calendars={calendars} apiKey={process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY} />
        </div>
      </Container>
    </Page>
  );
}

export default Events;
