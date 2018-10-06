import { DatabaseModule } from './../../database/database.module';
import { catsProviders } from './../cat.providers';
import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { Model } from 'mongoose';
import { Cat } from '../interfaces';

describe('CatsService', () => {
  let service: CatsService;
  let catModel: Model<Cat>;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [...catsProviders, CatsService],
    }).compile();
    service = module.get<CatsService>(CatsService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
