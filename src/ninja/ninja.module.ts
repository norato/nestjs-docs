import { Module } from '@nestjs/common';
import { NinjaController } from './ninja/ninja.controller';

@Module({
  controllers: [NinjaController],
})
export class NinjaModule {}
