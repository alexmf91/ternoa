import { useEffect, useState, SetStateAction } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { Spinner } from '@/components';

import { createNft, getOneNftById, updateNft } from '@/services/nfts.service';

import { Nft } from '@/interfaces/nft.interface';

export default function AddAndEditNft() {
  const [currentNft, setCurrentNft] = useState<Nft>();
  const [nftName, setNftName] = useState<string>('');
  const [nftDescription, setNftDescription] = useState<string>('');
  const [nftPictureUrl, setNftPictureUrl] = useState<string>('');

  const { id } = useParams();
  const navigate = useNavigate();

  const isEditMode = !!id;

  const handleNftNameOnChange = (event: {
    target: { value: SetStateAction<string> };
  }) => setNftName(event?.target.value);

  const handleNftDescriptionOnChange = (event: {
    target: { value: SetStateAction<string> };
  }) => setNftDescription(event?.target.value);

  const handleNftPictureOnChange = (event: {
    target: { value: SetStateAction<string> };
  }) => setNftPictureUrl(event?.target.value);

  const handleCreateNewNft = async () => {
    try {
      await createNft({
        name: nftName,
        description: nftDescription,
        picture: nftPictureUrl
      });
      toast.success('Nft created succesfully');
      navigate('/marketplace');
    } catch {
      toast.error('Sorry, an error has ocurred. Try again.');
    }
  };

  const handleUpdateNft = async () => {
    try {
      await updateNft(id!, {
        _id: id!,
        name: nftName,
        description: nftDescription,
        picture: nftPictureUrl
      });
      toast.success('Nft updated succesfully');
      navigate('/marketplace');
    } catch {
      toast.error('Sorry, an error has ocurred. Try again.');
    }
  };

  useEffect(() => {
    if (isEditMode) {
      const getCurrentNft = async () => {
        const fetchedNft = await getOneNftById(id!);
        setCurrentNft(fetchedNft);
      };
      getCurrentNft();
    }
  }, []);

  useEffect(() => {
    if (currentNft) {
      setNftName(currentNft?.name);
      setNftDescription(currentNft?.description);
      setNftPictureUrl(currentNft?.picture);
    }
  }, [currentNft]);

  return (
    <div className="mx-auto w-fit my-10 justify-center items-center flex flex-col lg:flex-row">
      <figure className="mx-16 flex justify-center items-center flex-col items-center rounded-lg border-cyan-500 border-2 w-96 h-96">
        {nftPictureUrl ? (
          <img
            className="rounded-lg w-full"
            src={nftPictureUrl}
            alt={`${nftName}-img`}
          />
        ) : isEditMode ? (
          <Spinner />
        ) : (
          <p className="text-white">Put a picture url to see the preview</p>
        )}
      </figure>
      <div className="mx-auto w-1/2 sm:w-96 flex flex-col justify-between">
        <section className="my-4">
          {isEditMode && (
            <div className="mb-5 flex text-sm">
              <h1 className="text-white text-sm">Id:</h1>
              <p className="text-gray-300 text-sm ml-3">{currentNft?._id}</p>
            </div>
          )}

          <div className="my-5">
            <h1 className="text-white text-sm">Name</h1>
            <input
              className="w-full"
              type="text"
              onChange={handleNftNameOnChange}
              value={nftName}
            />
          </div>

          <div className="my-5">
            <h2 className="text-white text-sm">Picture URL</h2>
            <input
              className="w-full"
              type="text"
              onChange={handleNftPictureOnChange}
              value={nftPictureUrl}
            />
          </div>

          <div className="my-7">
            <h2 className="text-white text-sm">Description</h2>
            <textarea
              className="w-full"
              onChange={handleNftDescriptionOnChange}
              value={nftDescription}
            />
          </div>
        </section>
        <div className="flex justify-center mt-3">
          {isEditMode ? (
            <button
              className="w-full py-3 my-3 bg-sky-400 hover:bg-rose-400 text-white"
              type="submit"
              onClick={handleUpdateNft}
            >
              Save Changes
            </button>
          ) : (
            <button
              className="w-full py-3 my-3 bg-sky-400 hover:bg-amber-400 text-white"
              type="submit"
              onClick={handleCreateNewNft}
            >
              Create new NFT
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
