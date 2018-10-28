import {
  Resolver,
  Query,
  Args,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import {
  JsonPlaceholderService,
  postQuery,
} from 'json-placeholder/json-placeholder.service';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly JsonPlaceholderService: JsonPlaceholderService,
  ) {}

  @Query()
  async getUsers() {
    return await this.JsonPlaceholderService.getUsers().toPromise();
  }

  @Query()
  async getUser(@Args('id') id: number) {
    return await this.JsonPlaceholderService.getUser(id).toPromise();
  }

  @ResolveProperty()
  async posts(@Parent() user) {
    const { id } = user;
    const query: postQuery = {
      userId: id,
    };
    return await this.JsonPlaceholderService.getPosts(query);
  }
}
