
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and restart auto-incrementing
  return knex.raw('TRUNCATE beer; ALTER SEQUENCE beer_id_seq restart with 1;')
    .then(function () {
      const beers = [{
        name: 'Beer 1',
        type: 'Amber',
        abv: '5.3',
        consumed: 'n'
      },{
        name: 'Beer 2',
        type: 'Ale',
        abv: '6.6',
        consumed: 'n'
      },{
        name: 'Beer 3',
        type: 'IPA',
        abv: '3.7',
        consumed: 'n'
      },{
        name: 'Beer 4',
        type: 'IPA',
        abv: '5.2',
        consumed: 'n'
      },{
        name: 'Beer 5',
        type: 'Ale',
        abv: '4.4',
        consumed: 'n'
      },{
        name: 'Beer 6',
        type: 'Ale',
        abv: '3.5',
        consumed: 'n'
      },{
        name: 'Beer 7',
        type: 'Amber',
        abv: '4.5',
        consumed: 'n'
      },{
        name: 'Beer 8',
        type: 'IPA',
        abv: '7.0',
        consumed: 'n'
      },{
        name: 'Beer 9',
        type: 'Ale',
        abv: '6.1',
        consumed: 'n'
      },{
        name: 'Beer 10',
        type: 'Amber',
        abv: '5.2',
        consumed: 'n'
      }];
      // seed database
      return knex('beer').insert(beers);
    });
};
