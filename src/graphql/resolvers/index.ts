import getAllFootballerQuery from './footballer/getAllFootballer';
import addFootballerMutation from './footballer/addFootballer';
import deleteFootballerMutation from './footballer/deleteFootballer';

const rootResolver = {
  Query: {
    ...getAllFootballerQuery,
  },
  Mutation: {
    ...addFootballerMutation,
    ...deleteFootballerMutation,
  },
};

export default rootResolver;
