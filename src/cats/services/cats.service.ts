import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Cat, CatDto } from '../interfaces';

@Injectable()
export class CatsService {
  constructor(@Inject('CatModelToken') private readonly catModel: Model<Cat>) {}

  async create(catDto: CatDto): Promise<Cat> {
    const newCat = new this.catModel(catDto);
    return await newCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }
}
