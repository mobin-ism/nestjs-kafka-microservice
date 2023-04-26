import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getGenre() {
    return [
      'Action',
      'Adventure',
      'Animation',
      'Comedy',
      'Crime',
      'Drama',
      'Fantasy',
      'Horror',
      'Mystery',
      'Romance',
      'Science Fiction',
      'Thriller',
      'Western',
    ];
  }
}
