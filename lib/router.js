Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
  //waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {
	template: 'register',
	name: 'register'
});

Router.route('/language', {
	template: 'language',
	name: 'language'
})
