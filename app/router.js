import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('company', {path: '/company/:company_id'});
  this.route('admin');
  this.route('contact');
  this.route('users');
});

export default Router;
