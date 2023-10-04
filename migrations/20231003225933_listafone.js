exports.up = function (knex) {
    return knex.schema.createTable('listafone', (t) => {
      t.increments();
      t.string('nome', 100).notNull().unique();
      t.string('numero', 11).notNull();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('listafone');
  };