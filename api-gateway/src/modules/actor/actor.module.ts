import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { ActorController } from './actor.controller'
import { ActorService } from './actor.service'

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'ACTOR-SERVICE',
                transport: Transport.KAFKA,
                options: {
                    client: {
                        clientId: 'ACTOR-CLIENT',
                        brokers: ['localhost:9092']
                    },
                    consumer: {
                        groupId: 'ACTOR-CONSUMER'
                    }
                }
            }
        ])
    ],
    controllers: [ActorController],
    providers: [ActorService]
})
export class ActorModule {}
