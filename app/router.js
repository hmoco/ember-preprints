import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('preprints', { path: '/preprints' });
  this.route('preprints', { path: '/preprints/:file_guid'});
});

export default Router;
