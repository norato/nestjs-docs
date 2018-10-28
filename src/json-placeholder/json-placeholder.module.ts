import { Module, HttpModule } from '@nestjs/common';
import { JsonPlaceholderService } from './json-placeholder.service';
import { PostResolver } from './resolvers/Post.resolver';
import { UserResolver } from './resolvers/User.resolver';
import { CommentResolver } from './resolvers/Comment.resolver';

@Module({
  imports: [HttpModule],
  providers: [
    JsonPlaceholderService,
    PostResolver,
    UserResolver,
    CommentResolver,
  ],
})
export class JsonPlaceholderModule {}
