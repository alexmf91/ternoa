import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NftsService } from './nfts.service';
import { CreateNftDto } from './dto/create-nft.dto';
import { UpdateNftDto } from './dto/update-nft.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Nfts')
@Controller('nfts')
export class NftsController {
  constructor(private readonly nftsService: NftsService) {}

  @Post()
  create(@Body() createNftDto: CreateNftDto) {
    return this.nftsService.createOneNft(createNftDto);
  }

  @Get()
  findAll() {
    return this.nftsService.findAllNfts();
  }

  @Get(':nftId')
  findOne(@Param('nftId') nftId: string) {
    return this.nftsService.findOneNft(nftId);
  }

  @Patch(':nftId')
  update(@Param('nftId') nftId: string, @Body() updateNftDto: UpdateNftDto) {
    return this.nftsService.updateNft(nftId, updateNftDto);
  }

  @Delete(':nftId')
  remove(@Param('nftId') nftId: string) {
    return this.nftsService.deleteNft(nftId);
  }
}
