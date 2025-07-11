import { SequelizeModule } from '@nestjs/sequelize';

const postgresConnector = SequelizeModule.forRoot({
  dialect: 'postgres',

  host: process.env.DB_HOST ? process.env.DB_HOST : 'postgres',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || '',
  database: process.env.POSTGRES_DB || 'nest-postgres-db',
  models: [],
  autoLoadModels: true,
  synchronize: true,
});

export { postgresConnector };
