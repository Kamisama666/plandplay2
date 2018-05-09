import {Games} from '/imports/server/collections/games';

export const resolvers = {
  Query: {
    gameById(root, {_id}, context) {
      return Games.findOne({_id: _id});
    },
    games(root, args, context) {
      return Games.find();
    }
  },
  Mutation: {
    addGame(root, args, context) {
      return Games.insert(args);
    },
    updateGame(root, {_id, ...updatedGame}, context) {
      return Games.update(_id, updatedGame);
    }
  }
};
