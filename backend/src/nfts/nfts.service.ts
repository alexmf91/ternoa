import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Nft, NftDocument } from './schemas/nft.schema';

import { CreateNftDto } from './dto/create-nft.dto';
import { UpdateNftDto } from './dto/update-nft.dto';

@Injectable()
export class NftsService {
  constructor(@InjectModel(Nft.name) private nftModel: Model<NftDocument>) {}

  public createOneNft(createNftDto: CreateNftDto) {
    const createdNft = new this.nftModel(createNftDto);
    return createdNft.save();
  }

  public findAllNfts(): Promise<Array<Nft>> {
    return this.nftModel.find().exec();
  }

  public async findOneNft(nftId: string) {
    const existingNft = await this.nftModel.findById(nftId).exec();

    if (!existingNft) {
      throw new NotFoundException(`Nft #${nftId} not found`);
    }

    return existingNft;
  }

  public async updateNft(nftId: any, updateNftDto: UpdateNftDto) {
    const existingNft = await this.nftModel.findByIdAndUpdate(
      nftId,
      updateNftDto,
      { new: true },
    );

    if (!existingNft) {
      throw new NotFoundException(`Nft #${nftId} not found`);
    }

    return existingNft;
  }

  public async deleteNft(nftId: string) {
    const deletedNft = await this.nftModel.findByIdAndDelete(nftId);

    if (!deletedNft) {
      throw new NotFoundException(`Nft #${nftId} not found`);
    }

    return deletedNft;
  }
}
