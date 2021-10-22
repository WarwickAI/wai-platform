import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Icon } from '@iconify/react';
import externalLinkFill from '@iconify/icons-eva/external-link-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
// components
import Page from '../components/Page';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../components/_dashboard/blog';
// helper
import { parseDashDateTime } from '../utils/formatTime';
import { mediumPageUrl, mediumRssFeedUrl } from '../utils/constants';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' }
];

// ----------------------------------------------------------------------

export default function Blog() {
  const [posts, setPosts] = useState([]);

  //  post schema: { cover, title, view, comment, share, author, createdAt }
  useEffect(() => {
    Axios.get(mediumRssFeedUrl)
      .then((data) => {
        const res = data.data.items;
        const posts = res.map((mediumPost) => ({
          id: mediumPost.guid,
          cover: mediumPost.thumbnail,
          title: mediumPost.title,
          createdAt: parseDashDateTime(mediumPost.pubDate),
          view: 1,
          comment: 1,
          share: 1,
          favorite: 1,
          author: {
            name: mediumPost.author,
            avatarUrl: `/static/logo2.png`
          },
          link: mediumPost.link,
          categories: mediumPost.categories
        }));
        setPosts(posts);
      })
      .catch((e) => {
        console.log('Failed to retrieve medium blogs.');
        console.log(e);
      });
  }, []);

  return (
    <Page title="Blog">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
          <Button
            href={mediumPageUrl}
            color="info"
            variant="contained"
            target="_blank"
            startIcon={<Icon icon={externalLinkFill} />}
          >
            View us on Medium
          </Button>
        </Stack>

        <Grid container spacing={3}>
          {posts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
