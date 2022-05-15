import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { NftCard } from '@/components';

import { getAllNft } from '@/services/nfts.service';

import { Nft } from '@/interfaces/nft.interface';

export default function NftList() {
  const [nftList, setNftList] = useState<Array<Nft>>();

  useEffect(() => {
    const getNftList = async () => {
      const fetchedNftList = await getAllNft();
      setNftList(fetchedNftList);
    };
    getNftList();
  }, []);

  return (
    <section className="flex flex-col">
      <Link to="add-nft" className="self-end">
        <button
          className="my-9 w-40 py-2 my-3 mr-2 bg-amber-500 hover:bg-amber-400 text-white"
          type="button"
        >
          Add new NFT
        </button>
      </Link>
      {nftList && (
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 4xl:grid-cols-7 gap-6 place-items-center">
          {nftList?.map((nft: any) => (
            <NftCard key={JSON.stringify(nft)} nft={nft} />
          ))}
        </ul>
      )}
    </section>
  );
}
