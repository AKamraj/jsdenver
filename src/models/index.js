// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comment, Reactions, Karma, User } = initSchema(schema);

export {
  Comment,
  Reactions,
  Karma,
  User
};