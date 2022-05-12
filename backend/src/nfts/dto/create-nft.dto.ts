import { ApiProperty } from '@nestjs/swagger';

export class CreateNftDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  picture: string;
}
