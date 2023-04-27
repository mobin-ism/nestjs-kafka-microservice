import { Inject, Injectable } from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'
import { CreateGenreDto } from './dto/create-genre.dto'
import { UpdateGenreDto } from './dto/update-genre.dto'

@Injectable()
export class GenreService {
    constructor(
        @Inject('GENRE-SERVICE') private readonly genreClient: ClientKafka
    ) {}

    create(createGenreDto: CreateGenreDto) {
        return 'This action adds a new genre'
    }

    async findAll(user?: string) {
        return new Promise((resolve, reject) => {
            this.genreClient.send('get-genre', {}).subscribe({
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
        return `This action returns a #${id} genre`
    }

    update(id: number, updateGenreDto: UpdateGenreDto) {
        return `This action updates a #${id} genre`
    }

    remove(id: number) {
        return `This action removes a #${id} genre`
    }
}
