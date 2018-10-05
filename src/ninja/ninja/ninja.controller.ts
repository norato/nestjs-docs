import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class NinjaController {
  @Get('/')
  getAll() {
    console.log('getall');
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log('Ninja id', id);
  }
}
