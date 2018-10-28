import { Test, TestingModule } from '@nestjs/testing';
import { JsonPlaceholderService } from './json-placeholder.service';
import { HttpModule } from '@nestjs/common';

describe('JsonPlaceholderService', () => {
  let service: JsonPlaceholderService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [JsonPlaceholderService],
    }).compile();
    service = module.get<JsonPlaceholderService>(JsonPlaceholderService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
