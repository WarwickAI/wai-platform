import faker from 'faker';
// utils
import { mockImgCover } from '../utils/mockImages';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Computer Vision based public safety system',
  'Detecting text written by Advanced Language Models',
  'GPT-3 for automation of creative processes',
  'Writing essays with GPT-3',
  'Shopping receipt analysis app'
];

// const posts = [...Array(6)].map((_, index) => ({
//   id: faker.datatype.uuid(),
//   cover: mockImgCover(index + 1),
//   title: POST_TITLES[index + 1],
//   createdAt: faker.date.past(),
//   view: faker.datatype.number(),
//   comment: faker.datatype.number(),
//   share: faker.datatype.number(),
//   favorite: faker.datatype.number(),
//   author: {
//     name: faker.name.findName(),
//     avatarUrl: `/static/logo2.png`
//   }
// }));

const posts = [
  {
    id: 'publicsafety',
    cover: mockImgCover(1),
    title: POST_TITLES[0],
    createdAt: faker.date.past(),
    view: faker.datatype.number(),
    comment: faker.datatype.number(),
    share: faker.datatype.number(),
    favorite: faker.datatype.number(),
    author: {
      name: faker.name.findName(),
      avatarUrl: `/static/logo2.png`
    }
  },
  {
    id: 'gpt3detector',
    cover: mockImgCover(1),
    title: POST_TITLES[1],
    createdAt: faker.date.past(),
    view: faker.datatype.number(),
    comment: faker.datatype.number(),
    share: faker.datatype.number(),
    favorite: faker.datatype.number(),
    author: {
      name: faker.name.findName(),
      avatarUrl: `/static/logo2.png`
    }
  },
  {
    id: 'creativity',
    cover: mockImgCover(1),
    title: POST_TITLES[2],
    createdAt: faker.date.past(),
    view: faker.datatype.number(),
    comment: faker.datatype.number(),
    share: faker.datatype.number(),
    favorite: faker.datatype.number(),
    author: {
      name: faker.name.findName(),
      avatarUrl: `/static/logo2.png`
    }
  },
  {
    id: 'gpt3essays',
    cover: mockImgCover(1),
    title: POST_TITLES[3],
    createdAt: faker.date.past(),
    view: faker.datatype.number(),
    comment: faker.datatype.number(),
    share: faker.datatype.number(),
    favorite: faker.datatype.number(),
    author: {
      name: faker.name.findName(),
      avatarUrl: `/static/logo2.png`
    }
  },
  {
    id: 'receiptanalysis',
    cover: mockImgCover(1),
    title: POST_TITLES[4],
    createdAt: faker.date.past(),
    view: faker.datatype.number(),
    comment: faker.datatype.number(),
    share: faker.datatype.number(),
    favorite: faker.datatype.number(),
    author: {
      name: faker.name.findName(),
      avatarUrl: `/static/logo2.png`
    }
  }
];

export default posts;
