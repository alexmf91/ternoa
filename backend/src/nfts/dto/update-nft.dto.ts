import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateNftDto } from './create-nft.dto';

export class UpdateNftDto extends PartialType(CreateNftDto) {
  @ApiProperty()
  id: string;
}
