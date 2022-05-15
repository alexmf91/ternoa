import { ApiProperty } from '@nestjs/swagger';

export class CreateNftDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly picture: string;
}
