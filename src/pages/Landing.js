import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Button, Typography, Container } from '@material-ui/core';
// components
import { MotionContainer, varBounceIn } from '../components/animate';
import Page from '../components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

export default function Landing() {
  return (
    <RootStyle title="Come back later!">
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <motion.div variants={varBounceIn}>
              <Typography variant="h3" paragraph>
                Sorry, warwick.ai under maintaince right now!
              </Typography>
            </motion.div>
            <Typography sx={{ color: 'text.secondary' }}>
              I'm sorry we couldn't give you all of your wishes and desires, but we promise we're
              working very very hard to get up and running as soon as possible.
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              In the mean time, if you want to get involved, come and have a chat on Discord. We
              welcome people from all skill levels and all walks of life. If you want to talk about
              AI, we want to talk to you.
            </Typography>
            <Button
              target="_blank"
              sx={{ marginTop: '3em' }}
              href="https://discord.gg/HYkExyWjh6"
              size="large"
              variant="contained"
            >
              Join the Discord
            </Button>
            <motion.div variants={varBounceIn}>
              <Box
                component="img"
                src="/static/illustrations/illustration_404.svg"
                sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
              />
            </motion.div>
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
}
