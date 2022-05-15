import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { Spinner } from '@/components';

import { getOneNftById, deleteNft } from '@/services/nfts.service';

import { Nft } from '@/interfaces/nft.interface';

export default function NftDetails() {
  const [currentNft, setCurrentNft] = useState<Nft>();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDeleteNft = async () => {
    try {
      await deleteNft(id!);
      toast.success(`Nft ${id} deleted succesfully`);
      navigate('/marketplace');
    } catch {
      toast.error('Sorry, an error has ocurred. Try again.');
    }
  };

  useEffect(() => {
    const getCurrentNft = async () => {
      const fetchedNft = await getOneNftById(id!);
      setCurrentNft(fetchedNft);
    };
    getCurrentNft();
  }, []);

  return (
    <div className="mx-auto my-10 w-96 md:w-3/6 2xl:w-4/6 justify-center  grid grid-cols-1 2xl:grid-cols-2">
      <figure className="flex justify-center items-center mx-10 rounded-lg border-cyan-500 border-2">
        {currentNft ? (
          <img
            className="w-full rounded-lg"
            src={currentNft?.picture}
            alt={`${currentNft?.name}-img`}
          />
        ) : (
          <Spinner />
        )}
      </figure>
      <div className="flex flex-col justify-between px-10">
        <section className="my-4">
          <div className="my-5">
            <h1 className="text-white text-sm">Name</h1>
            <p className="ml-1 mt-3 text-gray-300 text-sm">
              {currentNft?.name}
            </p>
          </div>
          <div className="my-5">
            <h1 className="text-white text-sm">Id</h1>
            <p className="ml-1 mt-3 text-gray-300 text-sm">{currentNft?._id}</p>
          </div>
          <div className="my-7">
            <h2 className="text-white text-sm">Description</h2>
            <p className="ml-1 mt-3 text-gray-300 text-sm">
              {currentNft?.description}
            </p>
          </div>
        </section>
        <div className="flex justify-center mt-3">
          <Link
            className="flex w-6/12 my-3 mr-1 bg-sky-400 hover:bg-sky-600 text-white"
            to={`/marketplace/edit/${id}`}
          >
            <button className="flex-1 text-white" type="button">
              Edit
            </button>
          </Link>

          <button
            className="w-6/12 py-3 my-3 ml-1 bg-sky-400 hover:bg-red-600 text-white"
            type="button"
            onClick={handleDeleteNft}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
