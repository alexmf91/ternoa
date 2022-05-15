import axios from 'axios';

import { Nft, NftToApi } from '@/interfaces/nft.interface';

export const getAllNft = async () => {
  const getAllNftResponse = await axios.get(
    `${import.meta.env.VITE_API_URL}/nfts`,
  );
  return getAllNftResponse.data;
};

export const getOneNftById = async (id: string) => {
  const getOneNftByIdResponse = await axios.get(
    `${import.meta.env.VITE_API_URL}/nfts/${id}`,
  );
  return getOneNftByIdResponse.data;
};

export const createNft = async (nftData: NftToApi) => {
  const createdNft = await axios.post(
    `${import.meta.env.VITE_API_URL}/nfts`,
    nftData,
  );
  return createdNft.data;
};

export const updateNft = async (nftId: string, nftData: Nft) => {
  const updatedNft = await axios.patch(
    `${import.meta.env.VITE_API_URL}/nfts/${nftId}`,
    nftData,
  );
  return updatedNft.data;
};

export const deleteNft = (nftId: string) =>
  axios.delete(`${import.meta.env.VITE_API_URL}/nfts/${nftId}`);
