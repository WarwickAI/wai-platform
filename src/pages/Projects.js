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

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchProjects() {
    let loadedProjects;
    try {
      const user = await Auth.currentAuthenticatedUser();
      await API.graphql({
        query: listProjects,
        variables: {
          limit: 100
        },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      }).then((result) => {
        loadedProjects = result.data.eventsByUser.items;
        setProjects(loadedProjects);
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Page title="Projects">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Projects
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Icon icon={plusFill} />}
          >
            New Project
          </Button>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <ProjectPostsSearch posts={PROJECTS} />
          <ProjectPostsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid container spacing={3}>
          {PROJECTS.map((post, index) => (
            <ProjectPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
