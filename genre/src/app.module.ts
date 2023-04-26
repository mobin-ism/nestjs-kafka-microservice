import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GENRE-SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'GENRE-CLIENT',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'GENRE-CONSUMER',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
