import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [CatsModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
