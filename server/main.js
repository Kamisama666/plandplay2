import {Meteor} from 'meteor/meteor';
import {createApolloServer} from 'meteor/apollo';
import {makeExecutableSchema, addMockFunctionsToSchema} from 'graphql-tools';

import {typeDefs} from '/imports/api/schema';
import {resolvers} from '/imports/api/resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

Meteor.startup(() => {
  createApolloServer({
    schema
  });
});
