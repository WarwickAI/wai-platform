import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import { API, Auth } from 'aws-amplify';
// material
import { Grid, Button, Container, Stack, Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
// components
import Page from '../components/Page';
import {
  ProjectPostCard,
  ProjectPostsSort,
  ProjectPostsSearch
} from '../components/_dashboard/projects';
//
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
    API.graphql({
      query: listProjects,
      variables: {
        limit: 100
      }
    })
      .then((result) => {
        const loadedProjects = result.data.listProjects.items;

        setProjects(loadedProjects);
        setIsLoading(false);
      })
      .catch(console.log);
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
          {/* <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Icon icon={plusFill} />}
          >
            New Project
          </Button> */}
        </Stack>

        {/* <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <ProjectPostsSearch posts={PROJECTS} />
          <ProjectPostsSort options={SORT_OPTIONS} />
        </Stack> */}

        <Grid container spacing={3}>
          {!isLoading &&
            projects.map((project, index) => (
              <ProjectPostCard key={project.id} project={project} index={index} />
            ))}
        </Grid>
      </Container>
    </Page>
  );
}
