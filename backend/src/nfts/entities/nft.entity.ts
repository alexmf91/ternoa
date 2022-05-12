import { ApiProperty } from '@nestjs/swagger';

export class Nft {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  picture: string;
}
