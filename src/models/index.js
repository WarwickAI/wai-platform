// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ProjectDifficulty = {
  INTRODUCTORY: 'INTRODUCTORY',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

const GroupType = {
  PROJECT: 'PROJECT',
  TALK: 'TALK',
  COURSE: 'COURSE'
};

const { Talk, Course, Group, Project } = initSchema(schema);

export { Talk, Course, Group, Project, ProjectDifficulty, GroupType };
