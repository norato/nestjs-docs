import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { Routes, RouterModule } from 'nest-router';
import { HelmetMiddleware } from '@nest-middlewares/helmet';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
import { LoggerMiddleware } from 'core/logger/logger.middleware';
import { NinjaModule } from './ninja/ninja.module';
import { DatabaseModule } from './database/database.module';

const routes: Routes = [
  {
    path: '/ninja',
    module: NinjaModule,
    children: [
      {
        path: ':ninja_id/cats',
        module: CatsModule,
      },
    ],
  },
];

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    CoreModule.forRoot(),
    CatsModule,
    NinjaModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    HelmetMiddleware.configure({});
    consumer
      .apply(HelmetMiddleware, LoggerMiddleware)
      .with('AppModule')
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
