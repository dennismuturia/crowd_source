import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      company: this.store.findAll('company'),
      reviews: this.store.findAll('review')
    });
  }
});
