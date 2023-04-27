import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ActorModule } from './modules/actor/actor.module'
import { GenreModule } from './modules/genre/genre.module'
import { MovieModule } from './modules/movie/movie.module'
import { SubscriberModule } from './modules/subscriber/subscriber.module'

@Module({
    imports: [GenreModule, ActorModule, SubscriberModule, MovieModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
