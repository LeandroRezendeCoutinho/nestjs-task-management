import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'motty.db.elephantsql.com',
  port: 5432,
  username: 'crsvguhs',
  password: 'JXyMRgJfGSmXrbk9e6hVnPCPms36gsgJ',
  database: 'crsvguhs',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
