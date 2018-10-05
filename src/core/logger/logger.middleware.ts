import { CoreService } from './../core.service';
import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import { IncomingMessage } from 'http';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly coreService: CoreService) {}
  resolve(moduleName: string): MiddlewareFunction {
    return (req: IncomingMessage, res, next) => {
      this.coreService.module(moduleName);
      this.coreService.requestFor(req.url);
      next();
    };
  }
}
