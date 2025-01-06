import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

import { EmiCalculator } from "./IntrestCalculator";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          header={item.component} // Rendering the single dynamic component
          className={item.className}
        />
      ))}
    </BentoGrid>
  );  
}

const items = [
  {

    component: (
      <div className="grid grid-cols-3 gap-4 items-center h-full">
        {/* Left Section */}
        <div className="col-span-2">
          <h1 className="font-merriweather-black font-bold text-2xl">
            Apply for a <span className="text-blue-500">Loan</span>
          </h1>
          <p className="font-serif text-lg mt-2">
            Apply for loans or invest in lending opportunities directly using your blockchain wallet on our platform. Experience secure, fast, and transparent transactions with the power of blockchain technology for both borrowing and investing.
          </p>
          <button
            onClick={() => (window.location.href = 'https://www.example.com')}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Apply
          </button>
        </div>
  
        {/* Right Section (Image) */}
        <div className="col-span-1">
          <img
            src="./images/loan.png"
            alt="Blockchain Illustration"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    ),  
    className: "md:col-span-2",
  },  
  {
    component: (
      <div className="h-full flex items-center justify-center">
        <EmiCalculator />
      </div>
    ),
    className: "md:col-span-1",
  },
  {

    component: <div>
      <div className="col-span-2">
          <h1 className="font-merriweather-black font-bold text-2xl">
            Online <span className="text-blue-500">KYC</span>
          </h1>
          <p className="font-serif text-lg mt-2">
          Easily complete your KYC verification on Lendsphere with our secure online process. Our blockchain-based system ensures fast, transparent, and reliable identity verification, giving you access to our platform while maintaining privacy and security. Get started with hassle-free verification today!
          </p>
          <button
            onClick={() => (window.location.href = 'https://www.example.com')}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Do KYC
          </button>
        </div>
    </div>,
    className: "md:col-span-1",
  },
  {
    component: (
      <div className="grid grid-cols-3 gap-4 items-center h-full">
        {/* Left Section */}
        <div className="col-span-2">
          <h1 className="font-merriweather-black font-bold text-2xl">
            Deposit <span className="text-blue-500">Assests</span>
          </h1>
          <p className="font-serif text-lg mt-2">
          Easily deposit your assets on Lendsphere to participate in loan investments. With blockchain technology, your deposits are secure, transparent, and hassle-free, allowing you to grow your wealth through decentralized finance. Start depositing today and watch your assets work for you.
          </p>
          <button
            onClick={() => (window.location.href = 'https://www.example.com')}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Deposit
          </button>
        </div>
  
        {/* Right Section (Image) */}
        <div className="col-span-1">
          <img
            src="./images/SupprotedAssets.png"
            alt="Blockchain Illustration"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    ),  
    className: "md:col-span-1",
  },
  {
    component: <div></div>,
    className: "md:col-span-2",
  },
];
