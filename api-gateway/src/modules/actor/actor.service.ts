import { Inject, Injectable } from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'
import { CreateActorDto } from './dto/create-actor.dto'
import { UpdateActorDto } from './dto/update-actor.dto'

@Injectable()
export class ActorService {
    constructor(
        @Inject('ACTOR-SERVICE') private readonly actorClient: ClientKafka
    ) {}

    create(createActorDto: CreateActorDto) {
        return 'This action adds a new actor'
    }

    async findAll(user?: string) {
        return new Promise((resolve, reject) => {
            this.actorClient.send('get-actor', {}).subscribe({
                next: (data) => {
                    console.log('received data:', data)
                    resolve(data)
                },
                error: (error) => {
                    console.error('error occurred:', error)
                    reject(error)
                },
                complete: () => {
                    console.log('completed')
                }
            })
        })
    }

    findOne(id: number) {
        return `This action returns a #${id} actor`
    }

    update(id: number, updateActorDto: UpdateActorDto) {
        return `This action updates a #${id} actor`
    }

    remove(id: number) {
        return `This action removes a #${id} actor`
    }
}
