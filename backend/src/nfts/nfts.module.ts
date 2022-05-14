import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { NftsService } from './nfts.service';
import { NftsController } from './nfts.controller';
import { Nft, NftSchema } from './schemas/nft.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Nft.name, schema: NftSchema }])],
  controllers: [NftsController],
  providers: [NftsService],
})
export class NftsModule {}
