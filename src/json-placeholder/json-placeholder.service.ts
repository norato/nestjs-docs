import { Injectable, HttpService } from '@nestjs/common';
import { Post } from './json-placeholder.interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class JsonPlaceholderService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private readonly httpService: HttpService) {}

  getPosts(): Observable<Post[]> {
    const url = this.buildUrl('posts');
    return this.resolve<Post[]>(url);
  }

  private resolve<T = any>(url: string): Observable<T> {
    return this.httpService.get<T>(url).pipe(map(it => it.data));
  }

  private buildUrl(path: string, id?: number) {
    return [this.baseUrl, path, id].join('/');
  }
}
