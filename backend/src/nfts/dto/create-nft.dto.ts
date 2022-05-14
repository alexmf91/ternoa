import { ApiProperty } from '@nestjs/swagger';

export class CreateNftDto {
  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly picture: string;
}
