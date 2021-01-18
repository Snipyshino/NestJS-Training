export default () => ({
  environment: process.env.NODE_ENV || 'development',
  database: {
    uri: process.env.MONGO_URI,
  }
});