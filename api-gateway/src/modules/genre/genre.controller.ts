import {
    Body,
    Controller,
    Delete,
    Get,
    Inject,
    OnModuleInit,
    Param,
    Patch,
    Post
} from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'
import { CreateGenreDto } from './dto/create-genre.dto'
import { UpdateGenreDto } from './dto/update-genre.dto'
import { GenreService } from './genre.service'

@Controller('genre')
export class GenreController implements OnModuleInit {
    constructor(
        private readonly genreService: GenreService,
        @Inject('GENRE-SERVICE')
        private readonly genreClient: ClientKafka
    ) {}
    onModuleInit() {
        this.genreClient.subscribeToResponseOf('get-genre')
    }

    @Post()
    create(@Body() createGenreDto: CreateGenreDto) {
        return this.genreService.create(createGenreDto)
    }

    @Get()
    findAll() {
        return this.genreService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.genreService.findOne(+id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto) {
        return this.genreService.update(+id, updateGenreDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.genreService.remove(+id)
    }
}
