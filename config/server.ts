export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['yourRandomKey1', 'yourRandomKey2']), /*<Before version>keys: env.array('APP_KEYS'),*/
  },
});
