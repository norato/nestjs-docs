import { Injectable } from '@nestjs/common';
import { Cat, CatDto } from '../interfaces';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(catDto: CatDto) {
    const cat: Cat = {
      ...catDto,
      id: 'foobar',
      created_at: new Date(),
      updated_at: new Date(),
    };
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
