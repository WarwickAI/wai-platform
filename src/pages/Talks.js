import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import { API, Auth } from 'aws-amplify';
// material
import { Grid, Button, Container, Stack, Typography } from '@material-ui/core';
// components
import { trackWindowScroll } from 'react-lazy-load-image-component';
import Page from '../components/Page';
import TalkPostCard from '../components/_dashboard/talks/TalkPostCard';
import { listTalks } from '../graphql/queries';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' }
];

// ----------------------------------------------------------------------

function Talks({ scrollPosition }) {
  const [talks, setTalks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function fetchTalks() {
    API.graphql({
      query: listTalks,
      variables: {
        limit: 100
      }
    })
      .then((result) => {
        const loadedTalks = result.data.listTalks.items;

        setTalks(loadedTalks);
        setIsLoading(false);
      })
      .catch(console.log);
  }

  useEffect(() => {
    fetchTalks();
  }, []);

  return (
    <Page title="Talks">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Talks
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {talks.map((talk, index) => (
            <TalkPostCard key={talk.id} talk={talk} index={index} scrollPosition={scrollPosition} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}

export default trackWindowScroll(Talks);
