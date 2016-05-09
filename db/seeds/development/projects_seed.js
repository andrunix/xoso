
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('projects').del(),

    // Inserts seed entries
    knex('projects').insert({
      id: 1, 
      name: 'xoso',
      description: 'The xoso web site'
    }),
    knex('projects').insert({
      id: 2, 
      name: 'madrilla',
      description: 'Hair Salon site'
    }),
    knex('projects').insert({
      id: 3, 
      name: 'school uniform resale',
      description: 'School Uniform Resale'
    })
  );
};
