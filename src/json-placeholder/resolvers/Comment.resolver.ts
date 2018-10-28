import { PostResolver } from './Post.resolver';
import { Comment } from './../json-placeholder.interfaces';
import {
  Resolver,
  Query,
  Args,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { JsonPlaceholderService } from 'json-placeholder/json-placeholder.service';

@Resolver('Comment')
export class CommentResolver {
  constructor(
    private readonly jsonPlaceholderService: JsonPlaceholderService,
    private readonly postResolver: PostResolver,
  ) {}

  @Query()
  async getComments() {
    return await this.jsonPlaceholderService.getComments().toPromise();
  }

  @Query()
  async getComment(@Args('id') id: number) {
    return await this.jsonPlaceholderService.getComment(id).toPromise();
  }

  @ResolveProperty()
  async post(@Parent() comment: Comment) {
    const { postId } = comment;
    return await this.postResolver.getPost(postId);
  }
}
