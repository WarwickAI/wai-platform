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
import { talksByShortName } from '../graphql/queries';
import { MotionContainer, varBounceIn } from '../components/animate';
import Page from '../components/Page';
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center'
}));

// ----------------------------------------------------------------------

export default function Talk() {
  const { shortName } = useParams();

  const [talk, setTalk] = useState({
    title: '',
    logo: '/static/logo2.png',
    joinLink: ''
  });

  const [talkFound, setTalkFound] = useState(true);

  const getTalkFromShortName = () =>
    API.graphql({
      query: talksByShortName,
      variables: {
        shortName,
        limit: 1
      }
    }).then((result) => {
      const talks = result.data.talksByShortName.items;

      if (talks.length === 0) {
        setTalkFound(false);
        return;
      }

      setTalk(talks[0]);
    });

  useEffect(() => getTalkFromShortName(), []);

  return !talkFound ? (
    <Navigate to="/404" replace />
  ) : (
    <RootStyle title="WAI Talk">
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 800, margin: 'auto' }}>
            <motion.div variants={varBounceIn}>
              <Box
                component="img"
                src={talk.logo === null ? '/static/logo2.png' : talk.logo}
                sx={{ mx: 'auto', my: { xs: 5, sm: 0 }, height: 400, width: 400 }}
              />
            </motion.div>

            <Typography variant="h3" paragraph>
              {talk.title}
            </Typography>

            <ReactMarkdown children={talk.description} />

            <Button
              variant="contained"
              href={talk.joinLink}
              target="_blank"
              sx={{ my: { xs: 5, sm: 5 } }}
              startIcon={<Icon icon={plusFill} />}
            >
              Join Talk
            </Button>
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
}
