export default () => ({
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT || '3306', 10),
    username: process.env.DATABASE_USER || 'Admin',
    password: process.env.password || 'Password',
    name: process.env.database || 'journaldb',
  },
});
