import { Routes, Route, Outlet } from 'react-router-dom';

import { NftList, NftDetails, AddAndEditNft } from '@/components';

export default function Marketplace() {
  return (
    <main className="p-10">
      <Routes>
        <Route index element={<NftList />} />
        <Route path="/details/:id" element={<NftDetails />} />
        <Route path="/add-nft" element={<AddAndEditNft />} />
        <Route path="/edit/:id" element={<AddAndEditNft />} />
      </Routes>
      <Outlet />
    </main>
  );
}
