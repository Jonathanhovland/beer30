module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/beer30'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};