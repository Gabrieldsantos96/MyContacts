/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema
    .createTable('categories', function (table) {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('name').notNullable();
    })
    .createTable('contacts', function (table) {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('name').notNullable();
      table.string('email').unique();
      table.string('phone');
      table.uuid('category_id').references('id').inTable('categories');
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable('contacts').dropTable('categories');
};
