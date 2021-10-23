import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import externalLinkFill from '@iconify/icons-eva/external-link-fill';
import eyeFill from '@iconify/icons-eva/eye-fill';
import { Link as RouterLink } from 'react-router-dom';
import shareFill from '@iconify/icons-eva/share-fill';
import messageCircleFill from '@iconify/icons-eva/message-circle-fill';
// material
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Link, Card, Grid, Avatar, Typography, CardContent, Chip } from '@material-ui/core';
// utils
import { fDate } from '../../../utils/formatTime';
import { fShortenNumber } from '../../../utils/formatNumber';
import { mediumPageUrl } from '../../../utils/constants';
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

// ----------------------------------------------------------------------

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number
};

export default function BlogPostCard({ post, index }) {
  const { cover, title, view, comment, share, author, createdAt, link, categories } = post;
  const latestPostLarge = index === 0;
  const latestPost = index === 1 || index === 2;

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
          <a href={mediumPageUrl} target="_blank" rel="noreferrer">
            <AvatarStyle
              alt={author.name}
              src={author.avatarUrl}
              sx={{
                ...((latestPostLarge || latestPost) && {
                  zIndex: 9,
                  top: 24,
                  left: 24,
                  width: 40,
                  height: 40,
                  border: '3px solid white',
                  backgroundColor: 'white'
                })
              }}
            />
          </a>

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
            {fDate(createdAt)} — {author.name}
          </Typography>

          <TitleStyle
            href={link}
            target="_blank"
            rel="noreferrer"
            color="inherit"
            variant="subtitle2"
            underline="hover"
            sx={{
              ...(latestPostLarge && { typography: 'h5', height: 60 }),
              ...((latestPostLarge || latestPost) && {
                color: 'common.white'
              })
            }}
          >
            {title}
            <Box component={Icon} icon={externalLinkFill} sx={{ width: 16, height: 16, ml: 0.6 }} />
          </TitleStyle>

          <InfoStyle>
            {categories?.map((category) => (
              <Chip sx={{ ml: 0.6, mt: 0.6 }} size="small" label={category} color="secondary" />
            ))}
          </InfoStyle>
        </CardContent>
      </Card>
    </Grid>
  );
}
