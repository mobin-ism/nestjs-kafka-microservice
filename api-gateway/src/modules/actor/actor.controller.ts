import {
    Body,
    Controller,
    Delete,
    Get,
    Inject,
    Param,
    Patch,
    Post
} from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'
import { ActorService } from './actor.service'
import { CreateActorDto } from './dto/create-actor.dto'
import { UpdateActorDto } from './dto/update-actor.dto'

@Controller('actor')
export class ActorController {
    constructor(
        private readonly actorService: ActorService,
        @Inject('ACTOR-SERVICE')
        private readonly genreClient: ClientKafka
    ) {}
    onModuleInit() {
        this.genreClient.subscribeToResponseOf('get-actor')
    }

    @Post()
    create(@Body() createActorDto: CreateActorDto) {
        return this.actorService.create(createActorDto)
    }

    @Get()
    findAll() {
        return this.actorService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.actorService.findOne(+id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateActorDto: UpdateActorDto) {
        return this.actorService.update(+id, updateActorDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.actorService.remove(+id)
    }
}
