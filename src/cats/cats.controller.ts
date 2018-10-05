import { Id } from './../core/id/id.decorator';
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Res,
  ForbiddenException,
  UseFilters,
  UsePipes,
  UseGuards,
  UseInterceptors,
  HttpStatus,
} from '@nestjs/common';
import { CatDto, Cat } from './interfaces';
import { CatsService } from './services';
import { HttpExceptionFilter } from 'core/http.filter';
import { TypeValidationPipe } from 'core/validation/validation.pipe';
import { RolesGuard } from 'core/roles.guard';
import { LogginInterceptor } from 'core/loggin.interceptor';

@Controller()
@UseGuards(RolesGuard)
@UseInterceptors(LogginInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @UsePipes(new TypeValidationPipe())
  async create(@Body() createCatDto: CatDto, @Res() res): Promise<CatDto> {
    return await res
      .status(HttpStatus.OK)
      .json(this.catsService.create(createCatDto));
  }

  @Get()
  async findAll(@Res() res) {
    const cats = await this.catsService.findAll();
    return res.status(HttpStatus.OK).json(cats);
  }

  @Get(':id')
  findOne(@Id('testing') id) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  @UseFilters(new HttpExceptionFilter())
  update(@Id('testing') id, @Body() updateCatDto) {
    throw new ForbiddenException();
  }

  @Delete(':id')
  remove(@Id('testing') id) {
    return `This action removes a #${id} cat`;
  }
}
