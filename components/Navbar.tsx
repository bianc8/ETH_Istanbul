"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import ConnectButton from "@/components/ConnectButton";

import logoImg from "@/public/logo.webp";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="flex flex-row items-center align-center justify-between w-full h-[70px] py-8 px-16">
        <Link
          href="/"
          className="text-xl font-bold underline underline-p-4 hover:text-slate-300 transition ease-in-out"
        >
          <Image src={logoImg} width={60} height={60} alt="N-Hub logo" />
        </Link>

        <div role="tablist" className="tabs tabs-lg tabs-lifted">
          <Link href="/dapp/attestation">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className={
                pathname == "/dapp/attestation" ? "tab tab-active" : "tab"
              }
              aria-label="Attest"
            />
          </Link>

          <Link href="/dapp/schema">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className={
                pathname == "/dapp/schema" ? "tab tab-active" : "tab"
              }
              aria-label="Schema"
              checked
            />
          </Link>

          <Link href="/dapp/history">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className={
                pathname == "/dapp/history" ? "tab tab-active" : "tab"
              }
              aria-label="Archive"
            />
          </Link>
        </div>
        <ConnectButton />
      </nav>
    </>
  );
};

export default Navbar;
