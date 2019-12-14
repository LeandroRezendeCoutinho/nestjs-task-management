import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.HOST || 'localhost',
  port: 5432,
  username: process.env.USER_NAME || 'postgres',
  password: process.env.PASSWORD || 'postgres',
  database: process.env.DATABASE || 'postgres',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
