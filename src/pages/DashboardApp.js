import { Auth } from 'aws-amplify';
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

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const [groups, setGroups] = useState([]);

  const fetchUserData = async () => {
    const userData = await Auth.currentUserInfo();
    console.log(userData);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Page title="WAI Groups">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={6} sm={8} md={6} spacing={0} sx={{ pb: 5 }}>
            <Typography variant="h4">
              Hi, Welcome back to the WAI Platform!{' '}
              <span role="img" aria-label="emoji">
                🌠
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={6} sx={{ pb: 5 }}>
            <Box>
              <CreateGroupButton groups={groups} setGroups={setGroups} />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
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

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
