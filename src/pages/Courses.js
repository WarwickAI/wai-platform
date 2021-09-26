import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import { API, Auth } from 'aws-amplify';
// material
import { Grid, Button, Container, Stack, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
import {
  ProjectPostCard,
  ProjectPostsSort,
  ProjectPostsSearch
} from '../components/_dashboard/projects';
//
import PROJECTS from '../_mocks_/blog';
import { listProjects } from '../graphql/queries';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' }
];

// ----------------------------------------------------------------------

export default function Courses() {
  return (
    <Page title="Courses">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Courses
          </Typography>
        </Stack>

        <Typography>This page is under construction.</Typography>
      </Container>
    </Page>
  );
}
