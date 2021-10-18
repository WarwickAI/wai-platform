import React, { useState, useEffect } from 'react';
// material
import { Container, Stack, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

function Events() {
  return (
    <Page title="Events">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Events
          </Typography>
        </Stack>

        <iframe
          title="PublicCalendar"
          src="https://calendar.google.com/calendar/embed?src=16gnvov94ele73k1e7ekbaqr08%40group.calendar.google.com&ctz=Europe%2FLondon"
          style={{ border: 0 }}
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
        />
      </Container>
    </Page>
  );
}

export default Events;
