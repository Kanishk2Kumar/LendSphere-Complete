import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { WalletSelector } from "./WalletSelector";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-20 py-4 z-50">
      <div className="flex items-center space-x-10">
        <div className="mt-2">
          <Link href="/">
            <img
              src="/LogoFull.png"
              alt="Logo Full"
              height={60}
              width={150}
            />
          </Link>
        </div>

        {/* Mobile Burger Icon */}
        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="ml-24">
            <Image
              src="/icons/Burger.svg"
              alt="Menu"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center space-x-10 text-blue-950 font-bold text-md font-serif">
          <Link href="/all-bonds" className="hover:text-gray-500">
            All Bonds
          </Link>
          <Link href="/investments" className="hover:text-gray-500">
            My Investments
          </Link>
          <Link href="/loans" className="hover:text-gray-500">
            Apply For Loans
          </Link>
        </div>
      </div>

      {/* Desktop Wallet Selector and Settings Icon */}
      <div className="hidden sm:flex items-center text-blue-950 font-bold text-md font-serif">
        <div>
          <WalletSelector />
        </div>
        <Popover>
          <PopoverTrigger className="hover:text-gray-500 ml-10">
            <Image
              src="/icons/Settings.svg" // Replace with your settings SVG path
              alt="Settings"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </PopoverTrigger>
          <PopoverContent className="w-48 p-2">
            <div className="flex flex-col space-y-2">
              <Link
                href="/admin"
                className="flex items-center text-blue-950 font-bold hover:text-gray-500 p-2 rounded hover:bg-gray-100"
              >
                <span>Admin</span>
                <Image
                  src="/icons/Lock.svg" // Replace with your lock SVG path
                  alt="Lock"
                  width={16}
                  height={16}
                  className="ml-6 mb-1"
                />
              </Link>
              <Link
                href="/account-details"
                className="flex items-center text-blue-950 font-bold hover:text-gray-500 p-2 rounded hover:bg-gray-100"
              >
                <span>Account Details</span>
                <Image
                  src="/icons/User.svg" // Replace with your user SVG path
                  alt="User "
                  width={16}
                  height={16}
                  className="ml-2 mb-1"
                />
              </Link>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center space-y-4 py-12">
          <div className="flex justify-end w-full px-4">
            <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-700">
              <Image
                src="/icons/Cross.svg"
                alt="Close"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-4 w-full px-4">
            <Link href="/all-bonds" className="text-lg text-blue-950 font-bold hover:text-gray-500">
              All Bonds
            </Link>
            <hr className="w-full border-gray-200" />
            <Link href="/investments" className="text-lg text-blue-950 font-bold hover:text-gray-500">
              My Investments
            </Link>
            <hr className="w-full border-gray-200" />
            <Link href="/loans" className="text-lg text-blue-950 font-bold hover:text-gray-500">
              Apply For Loans
            </Link>
            <hr className="w-full border-gray-200" />
            <Link href="/admin" className="text-lg text-blue-950 font-bold hover:text-gray-500">
              Admin Login
            </Link>
            <hr className="w-full border-gray-200" />
            <Link href="/account-details" className="text-lg text-blue-950 font-bold hover:text-gray-500">
              Account Details
            </Link>
            <hr className="w-full border-gray-200" />
            <div className="mt-4">
              <WalletSelector />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}