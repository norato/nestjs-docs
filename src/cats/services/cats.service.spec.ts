import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { Model } from 'mongoose';
import { Cat } from '../interfaces';
import { getModelToken } from '@nestjs/mongoose';

describe('CatsService', () => {
  let service: CatsService;
  let catModel: Model<Cat>;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();
    service = module.get<CatsService>(CatsService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
