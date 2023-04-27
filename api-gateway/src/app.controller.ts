import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'
import { AppService } from './app.service'

@Controller('api')
export class AppController implements OnModuleInit {
    constructor(
        @Inject('GENRE-SERVICE')
        private readonly genreClient: ClientKafka,
        private readonly appService: AppService
    ) {}
    onModuleInit() {
        this.genreClient.subscribeToResponseOf('get-genre')
    }

    @Get('genre')
    getGenre() {
        return this.appService.getGenre('Al Mobin')
    }
}
