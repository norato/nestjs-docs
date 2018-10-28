import { Injectable, HttpService } from '@nestjs/common';
import { Post, User, Comment } from './json-placeholder.interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class JsonPlaceholderService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private readonly httpService: HttpService) {}

  getPosts(): Observable<Post[]> {
    const url = this.buildUrl({ path: 'posts' });
    return this.resolve<Post[]>(url);
  }

  getPost(id: number): Observable<Post> {
    const url = this.buildUrl({ path: 'posts', id });
    return this.resolve<Post>(url);
  }

  getPostComments(postId: string) {
    const query = `postId=${postId}`;
    const url = this.buildUrl({ path: 'comments', query });
    return this.resolve<Post[]>(url);
  }

  getUsers(): Observable<User[]> {
    const url = this.buildUrl({ path: 'users' });
    return this.resolve<User[]>(url);
  }

  getUser(id: number): Observable<User> {
    const url = this.buildUrl({ path: 'users', id });
    return this.resolve<User>(url);
  }

  getUserPosts(userId: string) {
    const query = `userId=${userId}`;
    const url = this.buildUrl({ path: 'posts', query });
    return this.resolve<Post[]>(url);
  }

  getComments(): Observable<Comment[]> {
    const url = this.buildUrl({ path: 'comments' });
    return this.resolve<Comment[]>(url);
  }

  getComment(id: number): Observable<Comment> {
    const url = this.buildUrl({ path: 'comments', id });
    return this.resolve<Comment>(url);
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
