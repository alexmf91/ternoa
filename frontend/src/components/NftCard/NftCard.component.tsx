import { Link } from 'react-router-dom';

import { Nft } from '@/interfaces/nft.interface';

interface NftCardProps {
  nft: Nft;
}

export default function NftCard({ nft }: NftCardProps) {
  return (
    <li className="bg-white shadow-md rounded-xl mb-4 transition hover:scale-105 duration-150 ease-in-out">
      <Link to={`/marketplace/details/${nft._id}`}>
        <img src={nft.picture} alt="nft picture" />
        <div className="px-10 pt-2 pb-3 pl-5">
          <p className="font-bold leading-thight">{nft.name}</p>
          <p className="text-sm mt-1 italic">{nft._id}</p>
        </div>
      </Link>
    </li>
  );
}
