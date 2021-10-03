import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import { Link as RouterLink } from 'react-router-dom';
import shareFill from '@iconify/icons-eva/share-fill';
import messageCircleFill from '@iconify/icons-eva/message-circle-fill';
// material
import Tooltip from '@material-ui/core/Tooltip';
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Link, Card, Grid, Avatar, Typography, CardContent } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
// utils
import { fDate } from '../../../utils/formatTime';
import { fShortenNumber } from '../../../utils/formatNumber';
//
import SvgIconStyle from '../../SvgIconStyle';

// ----------------------------------------------------------------------

const CardMediaStyle = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)'
});

const TitleStyle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical'
});

const AvatarStyle = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: 'absolute',
  left: theme.spacing(3),
  bottom: theme.spacing(-2)
}));

const InfoStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(3),
  color: theme.palette.text.disabled
}));

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

const AVATAR_URL = '/static/logo2.png';

// ----------------------------------------------------------------------

ProjectPostCard.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number
};

const DifficultyChip = ({ desc, title, color }) => (
  <Tooltip title={desc} aria-label="add">
    <Chip size="small" label={title} color={color} />
  </Tooltip>
);

const IntroductoryChip = () => (
  <DifficultyChip
    desc="Suitable for people who have little or no experience coding AI. The goal of these projects mainly educational, allowing beginners to learn to write their own AI code."
    title="Introductory"
    color="primary"
  />
);
const IntermediateChip = () => (
  <DifficultyChip
    desc="Suitable for members who already have some AI knowledge; for instance those that have completed some AI courses on the Internet or with the society, or worked on a Beginner Project before. These projects are more independent than Beginner Projects."
    title="Intermediate"
    color="warning"
  />
);
const AdvancedChip = () => (
  <DifficultyChip
    desc="Suitable for more experienced students who have a good understanding of AI  and are proficient at coding. These aim to solve more complex problems, with potential market applications."
    title="Advanced"
    color="error"
  />
);

const getChipFromDifficulty = (difficulty) => {
  switch (difficulty) {
    case 'INTRODUCTORY':
      return <IntroductoryChip />;
    case 'INTERMEDIATE':
      return <IntermediateChip />;
    case 'ADVANCED':
      return <AdvancedChip />;
    default:
      return <IntroductoryChip />;
  }
};

export default function ProjectPostCard({ project, index }) {
  const { id, shortName, title, description, createdAt, cover, joinLink, difficulty } = project;
  const latestPostLarge = index === 0;
  const latestPost = index === 1 || index === 2;

  // const POST_INFO = [
  //   { number: comment, icon: messageCircleFill },
  //   { number: view, icon: eyeFill },
  //   { number: share, icon: shareFill }
  // ];

  return (
    <Grid item xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
      <Card sx={{ position: 'relative' }}>
        <CardMediaStyle
          sx={{
            ...((latestPostLarge || latestPost) && {
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
              }
            }),
            ...(latestPostLarge && {
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 3 / 4.66)'
              }
            })
          }}
        >
          <SvgIconStyle
            color="paper"
            src="/static/icons/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: 'absolute',
              ...((latestPostLarge || latestPost) && { display: 'none' })
            }}
          />
          <AvatarStyle
            alt="WarwickAI"
            src={AVATAR_URL}
            sx={{
              ...((latestPostLarge || latestPost) && {
                zIndex: 9,
                top: 24,
                left: 24,
                width: 40,
                height: 40
              })
            }}
          />

          <CoverImgStyle alt={title} src={cover} />
        </CardMediaStyle>

        <CardContent
          sx={{
            pt: 4,
            ...((latestPostLarge || latestPost) && {
              bottom: 0,
              width: '100%',
              position: 'absolute'
            })
          }}
        >
          <Typography
            gutterBottom
            variant="caption"
            sx={{ color: 'text.disabled', display: 'block' }}
          >
            {fDate(createdAt)}
          </Typography>

          <TitleStyle
            to={shortName}
            color="inherit"
            variant="subtitle2"
            underline="hover"
            component={RouterLink}
            sx={{
              ...(latestPostLarge && { typography: 'h5', height: 60 }),
              ...((latestPostLarge || latestPost) && {
                color: 'common.white'
              })
            }}
          >
            {title}
          </TitleStyle>

          {getChipFromDifficulty(difficulty)}

          {/* <InfoStyle>
            {POST_INFO.map((info, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ml: index === 0 ? 0 : 1.5,
                  ...((latestPostLarge || latestPost) && {
                    color: 'grey.500'
                  })
                }}
              >
                <Box component={Icon} icon={info.icon} sx={{ width: 16, height: 16, mr: 0.5 }} />
                <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
              </Box>
            ))}
          </InfoStyle> */}
        </CardContent>
      </Card>
    </Grid>
  );
}
