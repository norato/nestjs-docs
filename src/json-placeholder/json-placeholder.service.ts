import { Injectable, HttpService } from '@nestjs/common';
import { Post } from './json-placeholder.interfaces';
import { Observable, config } from 'rxjs';
import { map } from 'rxjs/operators';

export interface postQuery {
  userId?: number;
}
@Injectable()
export class JsonPlaceholderService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private readonly httpService: HttpService) {}

  getPosts(params?: postQuery): Observable<Post[]> {
    const query = params.userId ? `userId=${params.userId}` : null;
    const url = this.buildUrl({ path: 'posts', query });
    return this.resolve<Post[]>(url);
  }

  getPost(id: number): Observable<Post> {
    const url = this.buildUrl({ path: 'posts', id });
    return this.resolve<Post>(url);
  }

  getUsers(): Observable<Post> {
    const url = this.buildUrl({ path: 'users' });
    return this.resolve<Post>(url);
  }

  getUser(id: number): Observable<Post> {
    const url = this.buildUrl({ path: 'users', id });
    return this.resolve<Post>(url);
  }

  private resolve<T = any>(url: string): Observable<T> {
    return this.httpService.get<T>(url).pipe(map(it => it.data));
  }

  private buildUrl(params: { path: string; id?: number; query?: any }) {
    const url = [this.baseUrl, params.path, params.id].join('/');
    if (params.query) {
      return [url, params.query].join('?');
    }
    return url;
  }
}
