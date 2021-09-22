import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Link as RouterLink, useParams } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Button, Typography, Container } from '@material-ui/core';
// components
import plusFill from '@iconify/icons-eva/plus-fill';
import faker from 'faker';
import { MotionContainer, varBounceIn } from '../components/animate';
import Page from '../components/Page';

// ----------------------------------------------------------------------

const post = {
  id: 'publicsafety',
  cover: 'https://source.unsplash.com/random',
  shortName: 'shortname',
  title: 'A long format name for the project',
  createdAt: faker.date.past(),
  description: faker.datatype.string(300),
  joinLink: 'https://forms.gle/MTJmLfakcbxNQEiP8'
};

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

export default function Project() {
  const { id } = useParams();

  return (
    <RootStyle title="WAI Project">
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <motion.div variants={varBounceIn}>
              <Box component="img" src={post.cover} sx={{ mx: 'auto', my: { xs: 5, sm: 10 } }} />
            </motion.div>

            <motion.div variants={varBounceIn}>
              <Typography variant="h3" paragraph>
                Project: {post.title}
              </Typography>
            </motion.div>
            <Typography sx={{ color: 'text.secondary' }}>{post.description}</Typography>

            <Button
              variant="contained"
              href={post.joinLink}
              target="_blank"
              sx={{ my: { xs: 5, sm: 10 } }}
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
