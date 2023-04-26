import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka, MessagePattern } from '@nestjs/microservices';

@Controller('api')
export class AppController implements OnModuleInit {
  constructor(
    @Inject('GENRE-SERVICE')
    private readonly genreClient: ClientKafka,
    private readonly appService: AppService,
  ) {}
  onModuleInit() {
    this.genreClient.subscribeToResponseOf('get-genre');
  }

  @Get('genre')
  getGenre() {
    return this.appService.getGenre('Al Mobin');
  }
}
