import { JsonPlaceholderService } from './../json-placeholder.service';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Post')
export class PostResolver {
  constructor(
    private readonly JsonPlaceholderService: JsonPlaceholderService,
  ) {}

  @Query()
  async getPosts() {
    return await this.JsonPlaceholderService.getPosts().toPromise();
  }
}
