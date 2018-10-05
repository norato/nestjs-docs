import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
  log(value: string) {
    return `This action returns all "${value}"`;
  }
}
