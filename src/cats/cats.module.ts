import { CatsController } from './cats.controller';
import { Module } from '@nestjs/common';
import { Services } from './services/all.exports';
import { DatabaseModule } from 'database/database.module';
import { catsProviders } from './cat.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CatsController],
  providers: [...Services, ...catsProviders],
})
export class CatsModule {}
