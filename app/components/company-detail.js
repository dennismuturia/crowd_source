import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:desc'],
  sortedReviews: Ember.computed.sort('company.reviews', 'sortBy'),

  actions: {
      destroyReview(review) {
        review.destroyRecord();
      }
    }
});
