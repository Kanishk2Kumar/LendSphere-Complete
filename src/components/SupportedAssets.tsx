'use client'; // Ensures this is a client component

import React from 'react';

const supportedAssets = [
  {
    name: 'Bitcoin',
    logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  },
  {
    name: 'Ethereum',
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  },
  {
    name: 'Binance Coin',
    logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
  },
  {
    name: 'Cardano',
    logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
  },
  {
    name: 'Solana',
    logo: 'https://cryptologos.cc/logos/solana-sol-logo.png',
  },
  {
    name: 'Ripple',
    logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.png',
  },
  {
    name: 'Dogecoin',
    logo: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png',
  },
];

const OurSupportedAssets = () => {
  return (
    <section className="bg-gradient-to-r from-white to-blue-50 py-20">
      <div className="container mx-auto px-16gi">
        <h2 className="text-4xl font-bold text-center text-[#1a1a1a] mb-12">
          Our <span className="text-[#3a50e0]">Supported Assets</span>
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center">
          {supportedAssets.map((asset, index) => (
            <div key={index} className="flex flex-col items-center my-7">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                <img
                  src={asset.logo}
                  alt={`${asset.name} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-sm font-medium text-[#1a1a1a] mt-2">
                {asset.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSupportedAssets;
