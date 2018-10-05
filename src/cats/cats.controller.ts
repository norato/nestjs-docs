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
  UsePipes,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CatDto } from './interfaces';
import { CatsService } from './services';
import { HttpExceptionFilter } from 'core/http.filter';
import { TypeValidationPipe } from 'core/validation/validation.pipe';
import { RolesGuard } from 'core/roles.guard';
import { LogginInterceptor } from 'core/loggin.interceptor';

@Controller('cats')
@UseGuards(RolesGuard)
@UseInterceptors(LogginInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @UsePipes(new TypeValidationPipe())
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
