export default () => ({
  database: {
    host: process.env.DATASOURCE_HOST,
    port: parseInt(process.env.DATASOURCE_PORT, 10) || 5433,
    username: process.env.DATASOURCE_USERNAME,
    password: process.env.DATASOURCE_PASSWORD,
    database: process.env.DATASOURCE_DATABASE,
    autoLoadEntities: process.env.DATASOURCE_AUTO_ENTITIES,
  },
});
