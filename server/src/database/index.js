/* eslint-disable quotes */
const { Client } = require('pg');

const client = new Client({
  host: 'db',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect();

exports.query = async (_query, values) => {
  const { rows } = await client.query(_query, values);
  return rows;
};
