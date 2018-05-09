import SimpleSchema from 'simpl-schema';
import {MessageSchema} from './messages';

export const Games = new Meteor.Collection('Games');

const GamesSchema = {
  title: String,
  game_name: String,
  description: {
    type: String,
    optional: true
  },
  image_url: {
    type: String,
    optional: true
  },
  starting_time: Date,
  duration_hours: {
    type: SimpleSchema.Integer,
    min: 0
  },
  maximum_number_players: {
    type: SimpleSchema.Integer,
    min: 1
  },
  approved: Boolean,
  open_signups: {
    type: Boolean,
    defaultValue: false
  },
  full: {
    type: Boolean,
    defaultValue: false
  },
  owner: String,
  registered_players: {
    type: Array,
    defaultValue: []
  },
  waitlist_players: {
    type: Array,
    defaultValue: []
  },
  tags: {
    type: Array,
    defaultValue: []
  },
  messages: Array,
  'messages.$': {
    type: MessageSchema,
    optional: true
  }
};

Games.attachSchema(new SimpleSchema(GamesSchema));
