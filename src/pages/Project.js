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
import faker from 'faker';
import { projectsByShortName } from '../graphql/queries';
import { MotionContainer, varBounceIn } from '../components/animate';
import Page from '../components/Page';
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center'
}));

// ----------------------------------------------------------------------

export default function Project() {
  const { id } = useParams();

  const [project, setProject] = useState({
    title: '',
    logo: '/static/logo2.png',
    joinLink: ''
  });

  const [projectFound, setProjectFound] = useState(true);

  const getProjectFromShortName = () =>
    API.graphql({
      query: projectsByShortName,
      variables: {
        shortName: id,
        limit: 1
      }
    }).then((result) => {
      const projects = result.data.projectsByShortName.items;

      if (projects.length === 0) {
        setProjectFound(false);
        return;
      }

      setProject(projects[0]);
    });

  useEffect(() => getProjectFromShortName(), []);

  return !projectFound ? (
    <Navigate to="/404" replace />
  ) : (
    <RootStyle title="WAI Project">
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 800, margin: 'auto' }}>
            <motion.div variants={varBounceIn}>
              <Box
                component="img"
                src={project.logo === null ? '/static/logo2.png' : project.logo}
                sx={{ mx: 'auto', my: { xs: 5, sm: 0 }, height: 400, width: 400 }}
              />
            </motion.div>

            <motion.div variants={varBounceIn}>
              <Typography variant="h3" paragraph>
                {project.title}
              </Typography>
            </motion.div>
            {/* <Typography sx={{ color: 'text.secondary' }}>{project.description}</Typography> */}
            <ReactMarkdown children={project.description} />

            <Button
              variant="contained"
              href={project.joinLink}
              target="_blank"
              sx={{ my: { xs: 5, sm: 5 } }}
              startIcon={<Icon icon={plusFill} />}
            >
              Join Project
            </Button>
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
}
