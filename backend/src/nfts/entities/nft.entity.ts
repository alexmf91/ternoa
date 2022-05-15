import { ApiProperty } from '@nestjs/swagger';

export class Nft {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  picture: string;
}
