import { Cat } from './cat.interface';

export type CatDto = Pick<Cat, 'name' | 'age' | 'breed'>;
