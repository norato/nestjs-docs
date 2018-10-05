import { Module, Global } from '@nestjs/common';
import { CoreService } from './core.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { DynamicModule } from '@nestjs/common/interfaces';
import { TypeValidationPipe } from './validation/validation.pipe';

@Global()
@Module({})
export class CoreModule {
  static forRoot(): DynamicModule {
    const coreService = new CoreService();
    const loggerMiddleware = new LoggerMiddleware(coreService);
    return {
      module: CoreModule,
      providers: [
        { provide: CoreService, useValue: coreService },
        { provide: LoggerMiddleware, useValue: loggerMiddleware },
        TypeValidationPipe,
      ],
      exports: [CoreService, LoggerMiddleware],
    };
  }
}
