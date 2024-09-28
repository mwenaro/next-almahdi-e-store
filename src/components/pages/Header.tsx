// src/components/Header.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b-2 text-foreground">
      <div className="container py-4 px-6 flex items-center justify-between">
        <Link className="flex items-center gap-2" href="/">
          <Image
            alt="Al-Hamdi Auto Parts Ltd"
            loading="lazy"
            width="200"
            height="250"
            decoding="async"
            className="w-auto"
            
            src="https://almahdi.splendidmedia.co.ke//images/logo.png"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link className="hover:underline font-bold" href="/login">
            Login
          </Link>
          <Link className="hover:underline font-bold" href="/backoffice">
            Admin
          </Link>
          <Link className="relative font-bold" href="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-bag h-6 w-6 text-primary"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span className="absolute -top-2 -right-2 font-bold bg-accent text-foreground rounded-full px-2 py-0.5 text-xs">
              3
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
