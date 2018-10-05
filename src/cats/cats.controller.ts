import { CoreService } from './../core/core.service';
import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  Put,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CatDto } from './interfaces';
import { CatsService } from './services';

@Controller('cats')
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    private readonly coreService: CoreService,
  ) {}

  @Post()
  create(@Body() createCatDto: CatDto): CatDto {
    this.catsService.create(createCatDto);
    return createCatDto;
  }

  @Get()
  findAll(@Query() query, @Res() res) {
    res.status(HttpStatus.OK).json(this.catsService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return `This action removes a #${id} cat`;
  }
}
