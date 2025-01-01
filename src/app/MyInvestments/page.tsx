"use client";

import { Header } from "@/components/Header";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

const MyInvestments = () => {
  const { connected } = useWallet();
  return (
    <div>
      <Header />
      {connected ? (
        <div></div>
      ) : (
        <div className="flex items-center justify-center flex-col min-h-screen">
          <div className="text-4xl text-blue-500 font-merriweather-black">To See Your Investments Connect your wallet</div>
        </div>
      )}
    </div>
  )
}

export default MyInvestments