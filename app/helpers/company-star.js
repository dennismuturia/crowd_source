import Ember from 'ember';

export function companyStar(params) {
  var company = params[0];

    if(company.get('reviews').get('length') >= 5) {
      return Ember.String.htmlSafe('<i class="fa fa-star"></span>');
    }
}

export default Ember.Helper.helper(companyStar);
