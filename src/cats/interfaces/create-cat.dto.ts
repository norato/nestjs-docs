import { IsString, IsInt } from 'class-validator';
import { Cat } from './cat.interface';

export type ICatDto = Pick<Cat, 'name' | 'age' | 'breed'>;

export class CatDto implements ICatDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}
