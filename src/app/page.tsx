"use client";

import { Header } from "@/components/Header";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import Landing from "@/components/Landing";

function App() {
  const { connected } = useWallet();

  return (
    <div>
      <Header />
      {connected ? (
        <Landing />
      ) : (
        <div className="flex items-center justify-center flex-col min-h-screen">
          <div className="text-4xl text-blue-500 font-merriweather-black">To get started Connect a wallet</div>
        </div>
      )}
    </div>
  );
}

export default App;
