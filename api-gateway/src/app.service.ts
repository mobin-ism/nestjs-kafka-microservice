import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('GENRE-SERVICE') private readonly genreClient: ClientKafka,
  ) {}

  async getGenre(user: string) {
    return new Promise((resolve, reject) => {
      this.genreClient.send('get-genre', user).subscribe({
        next: (data) => {
          console.log('received data:', data);
          resolve(data);
        },
        error: (error) => {
          console.error('error occurred:', error);
          reject(error);
        },
        complete: () => {
          console.log('completed');
        },
      });
    });
  }
}
