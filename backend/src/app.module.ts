import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { NftsModule } from './nfts/nfts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),

    MongooseModule.forRoot(process.env.MONGODB_URI),

    NftsModule,
  ],
})
export class AppModule {}
