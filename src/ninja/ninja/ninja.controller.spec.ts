import { Test, TestingModule } from '@nestjs/testing';
import { NinjaController } from './ninja.controller';

describe('Ninja Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [NinjaController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: NinjaController = module.get<NinjaController>(NinjaController);
    expect(controller).toBeDefined();
  });
});
