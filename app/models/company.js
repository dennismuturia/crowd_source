import DS from 'ember-data';

export default DS.Model.extend({
  name:DS.attr(),
  type:DS.attr(),
  image:DS.attr(),
  content:DS.attr(),
  reviews: DS.hasMany('review', { async: true })
});
