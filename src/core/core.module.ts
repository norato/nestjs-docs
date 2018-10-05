import { Module, Global } from '@nestjs/common';
import { CoreService } from './core.service';

@Global()
@Module({
  providers: [
    {
      provide: CoreService,
      useValue: new CoreService(),
    },
  ],
  exports: [CoreService],
})
export class CoreModule {}
