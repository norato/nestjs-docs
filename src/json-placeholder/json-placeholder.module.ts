import { Module, HttpModule } from '@nestjs/common';
import { JsonPlaceholderService } from './json-placeholder.service';
import { PostResolver } from './resolvers/Post.resolver';

@Module({
  imports: [HttpModule],
  providers: [JsonPlaceholderService, PostResolver],
})
export class JsonPlaceholderModule {}
