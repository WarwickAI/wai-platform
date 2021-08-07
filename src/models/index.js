// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const GroupType = {
  "PROJECT": "PROJECT",
  "TALK": "TALK",
  "COURSE": "COURSE"
};

const { Group } = initSchema(schema);

export {
  Group,
  GroupType
};