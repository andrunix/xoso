
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table) {
		table.increments();
		table.string('name').notNullable().unique();
		table.string('description').notNullable();
		table.string('image');
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects'); 
};
