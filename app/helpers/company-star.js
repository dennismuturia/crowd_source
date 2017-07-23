import Ember from 'ember';

export function companyStar(params) {
  var companyRating = params[0].get('rating');

  if (companyRating === 1){
    return "{{fa-icon star}}";
  }else if (companyRating === 2) {
    return "{{fa-icon star}} {{fa-icon star}}";
  }else if (companyRating ===3) {
    return "{{fa-icon star}}{{fa-icon star}}{{fa-icon star}}";
  }else if (companyRating ===4) {
    return "{{fa-icon star}}{{fa-icon star}}{{fa-icon star}}{{fa-icon star}}";
  }else if (companyRating >= 5) {
    return "tooo";
  }
}

export default Ember.Helper.helper(companyStar);
