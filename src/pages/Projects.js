import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
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

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' }
];

// ----------------------------------------------------------------------

export default function Projects() {
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
