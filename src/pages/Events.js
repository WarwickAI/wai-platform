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
import CoursePostCard from '../components/_dashboard/courses/CoursePostCard';
import { listCourses } from '../graphql/queries';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' }
];

// ----------------------------------------------------------------------

function Events({ scrollPosition }) {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function fetchCourses() {
    API.graphql({
      query: listCourses,
      variables: {
        limit: 100
      }
    })
      .then((result) => {
        const loadedCourses = result.data.listCourses.items;

        setCourses(loadedCourses);
        setIsLoading(false);
      })
      .catch(console.log);
  }

  useEffect(() => {
    fetchCourses();
  }, []);

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

export default trackWindowScroll(Events);
