import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  TemplateIcon,
  ShoppingBagIcon,
  QrcodeIcon
} from '@heroicons/react/outline';

import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

export default function Header() {
  const { pathname } = useLocation();
  const isMarketplaceView = pathname?.includes('marketplace');
  const [walletAddress, setWalletAddress] = useState();

  const handleWalletConnection = async () => {
    if (window.ethereum) {
      try {
        const [accounts]: any = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
        console.log('accounts', accounts);
        setWalletAddress(accounts);
      } catch (error) {
        toast.error(`Error: ${error}`);
      }
    } else {
      toast.error('Metamask extension not detected, please install it.');
    }
  };

  return (
    <header className="flex items-center justify-between bg-[#11131a] px-8 py-2">
      <nav className="flex items-center">
        <Link to="/">
          <img
            className="w-36 py-2"
            src="https://www.ternoa.com/_next/image?url=%2Fstatic%2Fimages%2Fhome%2FTernoa-logo.svg&w=256&q=75"
            alt="ternoa-logo"
          />
        </Link>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'flex flex-1 ml-16 mr-6 text-white text-cyan-500'
              : 'flex flex-1 ml-16 mr-6 text-white'
          }
        >
          <TemplateIcon className="h-6 w-6 mr-1" />
          Home
        </NavLink>
        <NavLink
          to="/marketplace"
          className={
            isMarketplaceView
              ? 'flex flex-1 mx-5 text-white text-cyan-500'
              : 'flex flex-1 mx-5 text-white'
          }
        >
          <ShoppingBagIcon className="h-6 w-6 mr-1" />
          Marketplace
        </NavLink>
      </nav>
      <div className="flex justify-self-end">
        {walletAddress && (
          <span className="mx-4 w-44 truncate text-white">
            W.Address: {walletAddress}
          </span>
        )}
        <button
          type="button"
          className="flex  mr-5 text-white"
          onClick={handleWalletConnection}
        >
          <QrcodeIcon className="h-6 w-6 mr-1" />
          Wallet
        </button>
      </div>
    </header>
  );
}
