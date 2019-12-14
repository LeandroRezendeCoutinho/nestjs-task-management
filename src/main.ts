import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { AppModule } from './app.module';
// import * as cluster from 'cluster';
// import * as os from 'os';
// import { Logger } from '@nestjs/common';

// if (cluster.isMaster) {
//   const cpuCount = os.cpus().length;

//   for (let i = 0; i < cpuCount; i += 1) {
//     cluster.fork();
//   }

//   cluster.on( 'online', worker => {
//     Logger.log( 'Worker ' + worker.process.pid + ' is online.' );
//   });
//   cluster.on( 'exit',  ({ process }, code, signal ) => {
//     Logger.log( 'worker ' + process.pid + ' died.' );
//   });
// } else {
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
// }
