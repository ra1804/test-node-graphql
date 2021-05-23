import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Promise from 'bluebird';
import schema from './graphql/schema';

dotenv.config();
Promise.promisifyAll(mongoose);

mongoose.connect(process.env.DB_URL || '', {
  bufferMaxEntries: 0,
  socketTimeoutMS: 0,
  keepAlive: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${process.env.DB_URL}`);
});

const server = new ApolloServer(schema);

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
