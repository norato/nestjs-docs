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
  ForbiddenException,
  UseFilters,
} from '@nestjs/common';
import { CatDto } from './interfaces';
import { CatsService } from './services';
import { HttpExceptionFilter } from 'core/http.filter';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

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
  @UseFilters(new HttpExceptionFilter())
  update(@Param('id') id, @Body() updateCatDto) {
    throw new ForbiddenException();
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return `This action removes a #${id} cat`;
  }
}
