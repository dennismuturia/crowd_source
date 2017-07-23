import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('company', params.company_id);
  },
  actions:{
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var company = params.company;
      company.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return company.save();
      });
      this.transitionTo('company', company);
    }
  }
});
