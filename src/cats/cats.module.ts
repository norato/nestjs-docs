import { CatsController } from './cats.controller';
import { Module } from '@nestjs/common';
import { Services } from './services/all.exports';

@Module({
  controllers: [CatsController],
  providers: [...Services],
})
export class CatsModule {}
