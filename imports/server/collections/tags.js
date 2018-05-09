import SimpleSchema from 'simpl-schema';

export const Tags = new Meteor.Collection('Tags');

const TagsSchema = {
  name: String,
  description: String,
  image_url: {
    type: String,
    optional: true
  }
};

Tags.attachSchema(new SimpleSchema(TagsSchema));
