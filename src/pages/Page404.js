import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Button, Typography, Container } from '@material-ui/core';
// components
import { MotionContainer, varBounceIn } from '../components/animate';
import Page from '../components/Page';
// particles
import ParticleBackground from '../utils/particles/particleBackground';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(0),
  paddingBottom: theme.spacing(30)
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <RootStyle title="404 Page Not Found | Minimal-UI">
      <Container>
        <MotionContainer initial="initial" open>
          <Box
            sx={{
              maxWidth: 480,
              margin: 'auto',
              textAlign: 'center'
            }}
          >
            <motion.div variants={varBounceIn}>
              <Box
                component="img"
                src="/static/illustrations/illustration_404.svg"
                sx={{ height: 260, mx: 'auto', my: { xs: 0, sm: 0 } }}
              />
            </motion.div>
            <motion.div variants={varBounceIn}>
              <Typography variant="h3" paragraph>
                Sorry, page not found!
              </Typography>
            </motion.div>
            <Typography sx={{ color: 'text.secondary' }}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL?
              Be sure to check your spelling.
            </Typography>

            <Button
              to="/"
              size="large"
              variant="contained"
              sx={{ height: 40, my: { xs: 5, sm: 5 } }}
              component={RouterLink}
            >
              Home
            </Button>
          </Box>
        </MotionContainer>
      </Container>
      <ParticleBackground />
    </RootStyle>
  );
}
