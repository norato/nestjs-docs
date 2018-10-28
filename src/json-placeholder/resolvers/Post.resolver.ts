import { UserResolver } from './User.resolver';
import { JsonPlaceholderService } from './../json-placeholder.service';
import {
  Resolver,
  Query,
  Args,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';

@Resolver('Post')
export class PostResolver {
  constructor(
    private readonly JsonPlaceholderService: JsonPlaceholderService,
    private readonly userResolver: UserResolver,
  ) {}

  @Query()
  async getPosts() {
    return await this.JsonPlaceholderService.getPosts().toPromise();
  }

  @Query()
  async getPost(@Args('id') id: number) {
    return await this.JsonPlaceholderService.getPost(id).toPromise();
  }

  @ResolveProperty()
  async user(@Parent() post) {
    const { userId } = post;
    return await this.userResolver.getUser(userId);
  }
}
