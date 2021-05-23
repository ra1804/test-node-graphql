import { gql } from 'apollo-server';
import resolvers from '../resolvers/index';

const typeDefs = gql`
  type Query {
    getAllFootballer: [Footballer]
  }

  type Mutation {
    addFootballer(
      firstName: String
      lastName: String
      age: Float
      team: String
      number: String
      height: Float
      rating: Float
    ): Footballer
    deleteFootballer(id: ID!): String
  }

  type Footballer {
    id: ID!
    firstName: String
    lastName: String
    age: Float
    team: String
    number: String
    height: Float
    rating: Float
    createdAt: String
    updatedAt: String
  }
`;

const schema = {
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
};

export default schema;
