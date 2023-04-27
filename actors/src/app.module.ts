import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ACTOR-SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'ACTOR-CLIENT',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'ACTOR-CONSUMER',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
