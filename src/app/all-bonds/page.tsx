"use client";
import React, { useState } from "react";
import { Header } from "@/components/Header";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

const AllBonds = () => {
  const { connected } = useWallet();
  const [activeTab, setActiveTab] = useState("Active");
  const [searchId, setSearchId] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false);

  const loanCards = [
    {
      id: 1,
      title: 'Yo-gro',
      category: 'Ed-tech',
      requiredInvestment: '₹12 Lakh',
      expectedInterest: '10%',
      fundCollected: 38,
      status: 'Active', // Add status to each card
      images: ['/images/allbonds.png']
    },
    {
      id: 2,
      title: 'Edu-pro',
      category: 'Agri-tech',
      requiredInvestment: '₹15 Lakh',
      expectedInterest: '12%',
      fundCollected: 50,
      status: 'Pending', // Add status to each card
      images: ['/images/allbonds.png']
    },
    {
      id: 3,
      title: 'Edu-pro',
      category: 'Agri-tech',
      requiredInvestment: '₹15 Lakh',
      expectedInterest: '12%',
      fundCollected: 50,
      status: 'Resolved', // Add status to each card
      images: ['/images/allbonds.png']
    },
    {
      id: 4,
      title: 'Edu-pro',
      category: 'Agri-tech',
      requiredInvestment: '₹15 Lakh',
      expectedInterest: '12%',
      fundCollected: 50,
      status: 'Active', // Add status to each card
      images: ['/images/allbonds.png']
    },
    {
      id: 5,
      title: 'Edu-pro',
      category: 'Agri-tech',
      requiredInvestment: '₹15 Lakh',
      expectedInterest: '12%',
      fundCollected: 50,
      status: 'Pending', // Add status to each card
      images: ['/images/allbonds.png']
    },
    {
      id: 6,
      title: 'Edu-pro',
      category: 'Agri-tech',
      requiredInvestment: '₹15 Lakh',
      expectedInterest: '12%',
      fundCollected: 50,
      status: 'Active', // Add status to each card
      images: ['/images/allbonds.png']
    },
    {
      id: 7,
      title: 'Edu-pro',
      category: 'Agri-tech',
      requiredInvestment: '₹15 Lakh',
      expectedInterest: '12%',
      fundCollected: 50,
      status: 'Pending', // Add status to each card
      images: ['/images/allbonds.png']
    },{
      id: 8,
      title: 'Edu-pro',
      category: 'Agri-tech',
      requiredInvestment: '₹15 Lakh',
      expectedInterest: '12%',
      fundCollected: 50,
      status: 'Pending', // Add status to each card
      images: ['/images/allbonds.png']
    },
    {
      id: 9,
      title: 'Edu-pro',
      category: 'Agri-tech',
      requiredInvestment: '₹15 Lakh',
      expectedInterest: '12%',
      fundCollected: 50,
      status: 'Active', // Add status to each card
      images: ['/images/allbonds.png']
    },
    {
      id: 10,
      title: 'Edu-pro',
      category: 'Agri-tech',
      requiredInvestment: '₹15 Lakh',
      expectedInterest: '12%',
      fundCollected: 50,
      status: 'Pending', // Add status to each card
      images: ['/images/allbonds.png']
    }
  ];

  // Filter the loan cards based on the selected status and search ID
  const filteredCards = loanCards.filter(
    (loan) =>
      loan.status === activeTab &&
      (!searchTriggered || searchId === "" || loan.id.toString() === searchId)
  );

  const handleSearch = () => {
    setSearchTriggered(true);
  };

  return (
    <div>
      <Header />
      {connected ? (
        <div className="max-w-7xl flex-row mx-auto p-4 mt-24 font-serif">
          {/* Search Bar */}
          <div className="flex justify-center items-center mb-6">
            <input
              type="text"
              placeholder="Search by ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="px-4 py-2 w-3/4 sm:w-1/2 lg:w-1/3 border border-gray-300 bg-white text-black rounded-l-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md"
            >
              <img
                src="./icons/Search.svg"
                alt="Search"
                className="w-5 h-5 inline-block"
              />
            </button>
          </div>

          {/* Image Section */}
          <img
            src="./images/loan.png"
            alt="Loan"
            className="w-full h-[400px] object-cover"
          />

          {/* Sliding Status Buttons */}
          <div className="mt-6 relative w-140 mx-auto">
            <div className="flex justify-between bg-gray-200 rounded-full p-1 relative">
              <div
                className={`absolute top-0 left-0 w-1/3 h-full bg-blue-500 rounded-full transition-transform duration-300 ease-in-out`}
                style={{
                  transform:
                    activeTab === "Active"
                      ? "translateX(0%)"
                      : activeTab === "Pending"
                      ? "translateX(100%)"
                      : "translateX(200%)",
                }}
              ></div>
              <button
                className={`w-1/3 py-2 text-center font-medium z-10 ${
                  activeTab === "Active" ? "text-white" : "text-gray-600"
                }`}
                onClick={() => setActiveTab("Active")}
              >
                Active
              </button>
              <button
                className={`w-1/3 py-2 text-center font-medium z-10 ${
                  activeTab === "Pending" ? "text-white" : "text-gray-600"
                }`}
                onClick={() => setActiveTab("Pending")}
              >
                Pending
              </button>
              <button
                className={`w-1/3 py-2 text-center font-medium z-10 ${
                  activeTab === "Resolved" ? "text-white" : "text-gray-600"
                }`}
                onClick={() => setActiveTab("Resolved")}
              >
                Resolved
              </button>
            </div>
          </div>

          {/* Loan Section */}
          <div className="ml-20 mt-6 flex flex-wrap gap-12 justify-start">
            {filteredCards.length > 0 ? (
              filteredCards.map((loan) => (
                <div
                  key={loan.id}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-auto bg-white border rounded-lg shadow p-4 mb-4"
                >
                  <div className="flex justify-between mb-4">
                    {loan.images.map((imgSrc, index) => (
                      <img
                        key={index}
                        src={imgSrc}
                        alt={`Loan ${loan.id} Image ${index + 1}`}
                        width={280}
                        height={80}
                        className="object-cover rounded-md"
                      />
                    ))}
                  </div>
                  <p className="text-sm mb-4">
                    <strong>
                      {loan.id}. {loan.title}
                    </strong>
                    <br />
                    Category: {loan.category} <br />
                    Required Investment: {loan.requiredInvestment} <br />
                    Expected Interest: {loan.expectedInterest}
                  </p>
                  <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden mb-2">
                    <div
                      className="bg-blue-500 h-full"
                      style={{ width: `${loan.fundCollected}%` }}
                    ></div>
                  </div>
                  <p className="text-sm mb-4">{loan.fundCollected}% fund collected</p>
                  <button className="px-32 py-2 border-black bg-white text-black rounded hover:bg-blue-600">
                    Apply
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No results found.</p>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col min-h-screen">
          <div className="text-4xl text-blue-500 font-merriweather-black">
            To Apply For Loans Connect your wallet
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBonds;
