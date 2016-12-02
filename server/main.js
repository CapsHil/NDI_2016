import { Meteor } from 'meteor/meteor';

Users = new Mongo.Collection('Users');

Meteor.startup(() => {
  // code to run on server at startup
});