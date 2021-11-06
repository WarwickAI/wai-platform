import { Auth } from 'aws-amplify';
import { useSelector } from 'react-redux';
// react
import { useEffect, useRef, useState } from 'react';
// material
import { Box, Grid, Container, Typography, Button } from '@material-ui/core';
// components
import { experimentalStyled as styled } from '@material-ui/core/styles';
import CreateGroupButton from '../layouts/dashboard/CreateGroupButton';
import Page from '../components/Page';
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates
} from '../components/_dashboard/app';
import UserGroup from '../components/UserGroup';
import withAuthentication from '../components/authentication/ProtectedRoute';
// ----------------------------------------------------------------------

function DashboardApp() {
  const userAttributes = useSelector((state) => state.auth);

  useEffect(() => console.log(userAttributes));

  return (
    <Page title="WAI Groups">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={6} sm={8} md={6} spacing={0} sx={{ pb: 5 }}>
            <Typography variant="h4">
              Welcome back {userAttributes.givenName} to the WAI Platform!{' '}
              <span role="img" aria-label="emoji">
                🌠
              </span>
            </Typography>
          </Grid>
          {/* <Grid item xs={12} sm={4} md={6} sx={{ pb: 5 }}>
            <Box>
              <CreateGroupButton groups={groups} setGroups={setGroups} />
            </Box>
          </Grid> */}
        </Grid>
        <Typography>This page is under construction.</Typography>
        {/* <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <UserGroup />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <UserGroup />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <UserGroup />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <UserGroup />
          </Grid>
        </Grid> */}
      </Container>
    </Page>
  );
}

export default DashboardApp;
