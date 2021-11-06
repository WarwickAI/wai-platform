import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Link as RouterLink, useParams, Navigate } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Button, Typography, Container } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
// components
import plusFill from '@iconify/icons-eva/plus-fill';
import { coursesByShortName } from '../graphql/queries';
import { MotionContainer, varBounceIn } from '../components/animate';
import Page from '../components/Page';
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center'
}));

// ----------------------------------------------------------------------

export default function Course() {
  const { shortName } = useParams();

  const [course, setCourse] = useState({
    title: '',
    logo: '/static/logo2.png',
    joinLink: ''
  });

  const [courseFound, setCourseFound] = useState(true);

  const getCourseFromShortName = () =>
    API.graphql({
      query: coursesByShortName,
      variables: {
        shortName,
        limit: 1
      }
    }).then((result) => {
      const courses = result.data.coursesByShortName.items;

      if (courses.length === 0) {
        setCourseFound(false);
        return;
      }

      setCourse(courses[0]);
    });

  useEffect(() => getCourseFromShortName(), []);

  return !courseFound ? (
    <Navigate to="/404" replace />
  ) : (
    <RootStyle title="WAI Course">
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 800, margin: 'auto' }}>
            <motion.div variants={varBounceIn}>
              <Box
                component="img"
                src={course.logo === null ? '/static/logo2.png' : course.logo}
                sx={{ mx: 'auto', my: { xs: 5, sm: 0 }, height: 400, width: 400 }}
              />
            </motion.div>

            <Typography variant="h3" paragraph>
              {course.title}
            </Typography>

            <ReactMarkdown children={course.description} />

            {course.joinLink && (
              <Button
                variant="contained"
                href={course.joinLink}
                target="_blank"
                sx={{ my: { xs: 5, sm: 5 } }}
                startIcon={<Icon icon={plusFill} />}
              >
                Join Course
              </Button>
            )}
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
}
