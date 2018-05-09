import SimpleSchema from 'simpl-schema';

export const MessageSchema = {
  content: {
    type: String,
    optional: false
  },
  user_id: {
    type: String,
    optional: false
  }
};
