import { Module } from '@nestjs/common';
import { postgresConnector } from './config/postgres';

@Module({
  controllers: [],
  providers: [],
  imports: [postgresConnector],
})
export class AppModule {}
