import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import { API, Auth } from 'aws-amplify';
// material
import { Grid, Button, Container, Stack, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
import CoursePostCard from '../components/_dashboard/courses/CoursePostCard';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' }
];

const courses = [
  {
    id: 1,
    title: 'WAI101 An introduction to Artificial Intelligence',
    description: 'asd',
    createdAt: new Date(),
    cover: 'https://i.imgur.com/zmUBlm9.png',
    joinLink:
      'https://docs.google.com/forms/d/e/1FAIpQLSd0SEFShTHdv1gmJMwamReS3NOaRepbystqKvz_oo8wYxSU_w/viewform?usp=sf_link'
  },
  {
    id: 2,
    title: 'Introduction to Python',
    description:
      'Python. You’ve heard the name a hundred times - but do you know how to use it? If you’re interested in learning, need to brush up on your skills, or just want to work on a real Python project, then join our Introduction to Python course',
    createdAt: new Date(),
    cover: 'https://i.imgur.com/Ktg5tpi.png',
    joinLink:
      'https://docs.google.com/forms/d/e/1FAIpQLSd0SEFShTHdv1gmJMwamReS3NOaRepbystqKvz_oo8wYxSU_w/viewform?usp=sf_link'
  }
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

        <Grid container spacing={3}>
          {courses.map((course, index) => (
            <CoursePostCard key={course.id} course={course} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
