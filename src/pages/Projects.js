import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import { API, Auth } from 'aws-amplify';
// material
import { Grid, Button, Container, Stack, Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { trackWindowScroll } from 'react-lazy-load-image-component';
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

function Projects({ scrollPosition }) {
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
          <Button
            variant="contained"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfTOEUJ7mUhSpq4hP5KK-rIq8An3qBpqn4RLcm3zQo3vMFnEA/viewform?usp=sf_link"
            startIcon={<Icon icon={plusFill} />}
          >
            Suggest a project
          </Button>
        </Stack>

        {/* <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <ProjectPostsSearch posts={PROJECTS} />
          <ProjectPostsSort options={SORT_OPTIONS} />
        </Stack> */}

        <Grid container spacing={3}>
          {!isLoading &&
            projects.map((project, index) => {
              if (project.display) {
                return (
                  <ProjectPostCard
                    key={project.id}
                    project={project}
                    index={index}
                    scrollPosition={scrollPosition}
                  />
                );
              }
              return <></>;
            })}
        </Grid>
      </Container>
    </Page>
  );
}

export default trackWindowScroll(Projects);
