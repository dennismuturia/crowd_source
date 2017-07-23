import Ember from 'ember';

export default Ember.Component.extend({
  addNewCompany: false,
  actions: {
    companyFormShow() {
      this.set('addNewCompany', true);
    },
    saveCompany1() {
      var params = {
        name: this.get('name'),
        type: this.get('type'),
        image: this.get('image'),
        content: this.get('content')
      };
      this.set('addNewCompany', false);
      this.sendAction('saveCompany2', params);
    }
  }
});
