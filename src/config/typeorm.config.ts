import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  // host: process.env.HOST || 'localhost',
  // port: 5432,
  // username: process.env.USER_NAME || 'postgres',
  // password: process.env.PASSWORD || 'postgres',
  database: process.env.DATABASE || 'task.db',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
