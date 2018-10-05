import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
  module(value: string) {
    console.log(`\n[${value}]\n`);
  }
  requestFor(value: string) {
    console.log(`request for: ${value}`);
  }
}
