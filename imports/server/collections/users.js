import SimpleSchema from 'simpl-schema';

const UsersSchema = {};

/* Attach schema to Meteor.users collection */
Meteor.users.attachSchema(new SimpleSchema(UsersSchema));
export const Users = Meteor.users;
