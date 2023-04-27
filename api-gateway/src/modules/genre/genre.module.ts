import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { GenreController } from './genre.controller'
import { GenreService } from './genre.service'

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'GENRE-SERVICE',
                transport: Transport.KAFKA,
                options: {
                    client: {
                        clientId: 'GENRE-CLIENT',
                        brokers: ['localhost:9092']
                    },
                    consumer: {
                        groupId: 'GENRE-CONSUMER'
                    }
                }
            }
        ])
    ],
    controllers: [GenreController],
    providers: [GenreService]
})
export class GenreModule {}
