import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      destroyReview(review) {
        review.destroyRecord();
      }
    }
});
