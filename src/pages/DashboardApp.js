// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
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
  return (
    <Page title="WAI Groups">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">
            Hi, Welcome back to the WAI Platform!{' '}
            <span role="img" aria-label="emoji">
              🌠
            </span>
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} spacing={0}>
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
