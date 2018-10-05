import { ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class LogginInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    call$: Observable<any>,
  ): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    return call$.pipe(
      tap(it => console.log(`After at: ${now}\nfrom LogginInterceptor: `, it)),
    );
  }
}
