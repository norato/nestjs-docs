import { createParamDecorator } from '@nestjs/common';

export const Id = createParamDecorator((data, req) => {
  console.log(data);

  return req.params.id;
});
