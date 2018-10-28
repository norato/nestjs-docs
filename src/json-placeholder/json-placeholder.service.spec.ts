import { Test, TestingModule } from '@nestjs/testing';
import { JsonPlaceholderService } from './json-placeholder.service';
import { HttpService, HttpModule } from '@nestjs/common';

describe('JsonPlaceholderService', () => {
  let service: JsonPlaceholderService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [JsonPlaceholderService, HttpService],
    }).compile();
    service = module.get<JsonPlaceholderService>(JsonPlaceholderService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
