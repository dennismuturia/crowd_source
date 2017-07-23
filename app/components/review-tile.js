import Ember from 'ember';
import swal from 'sweetalert';

export default Ember.Component.extend({
  actions:{
    delete(review) {
      if (swal('Are you sure you want to delete this review?')) {
        this.sendAction('destroyReview', review);
      }
  }
}
});
