const path = require('path');
var absolutePath = path.resolve("..\\node_modules\\.bin\\knex");
// const absolutePath = './node_modules/.bin/knex'
console.log(absolutePath)

// module.exports = {
//   development: {
//     client: 'postgresql',
//     connection: {
//       host: '127.0.0.1',
//       user: '',
//       password: '123456',
//       port: '5433',
//       database: 'grpc-node-course',
//     },
//     pool: {
//       min: 2,
//       max: 10,
//     },
//     migrations: {
//       directory: path.join(__dirname, 'db', 'migrations'),
//     },
//     seeds: {
//       directory: path.join(__dirname, 'db', 'seeds'),
//     },
//   },
// };

// cd server && mkdir db && cd db && mkdir migrations seeds
// ../node_modules/.bin/knex migrate:make blogs

// https://www.heady.io/blog/knex-migration-for-schema-and-seeds-with-postgresql