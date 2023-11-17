import Link from "next/link";
import Image from "next/image";
import ConnectButton from "@/components/ConnectButton";

import heroImg from "@/public/hero.webp";
import featuresImg from "@/public/features.webp";
import developerImg from "@/public/developer.webp";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col items-center justify-center w-[90%] h-[80vh] max-h-[80vh] rounded-2xl backdrop-blur-md bg-white/10 relative">
          <Image
            src={heroImg}
            alt="BRND hero image"
            className="absolute h-full top-0 left-0 z-0 object-cover bg-[#000] opacity-20"
          />
        <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-5xl font-bold text-center text-white">BRND</h1>
          <p className="mt-3 text-2xl text-center text-white">Subtitle</p>
          <Link href="/dapp/schema">
            <button className="mt-10 p-4 bg-blue-500 rounded-full">
              Open dApp
            </button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="flex flex-row w-[90%] h-[70vh] max-h-[70vh] rounded-2xl bg-white/20 border-slate-700 p-4">
        <div className="m-auto">
          <Image
            src={featuresImg}
            alt="BRND hero image"
            className="w-[20vw] max-w-[50vw] h-auto object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-[50vw] max-w-[50vw] h-full text-white">
          <h1 className="text-2xl">Features</h1>
          <p className="mt-3 text-lg">Subtitle</p>
          <div className="grid grid-cols-2 gap-4 mt-10 w-full">
            <div className="flex flex-col p-8 m-2">
              <p>1</p>
            </div>
            <div className="flex flex-col p-8 m-2">
              <p>2</p>
            </div>
            <div className="flex flex-col p-8 m-2">
              <p>3</p>
            </div>
            <div className="flex flex-col p-8 m-2">
              <p>4</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="flex flex-col w-[90%] rounded-2xl bg-white/20 border-slate-700 items-center gap-4 p-4">
        <h1 className="text-2xl">Team</h1>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={developerImg}
              alt="BRND hero image"
              className="object-cover"
            />
            <p className="text-2xl">Dev 1</p>
            <p className="text-lg">Subtitle</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              src={developerImg}
              alt="BRND hero image"
              className="object-cover"
            />
            <p className="text-2xl">Dev 2</p>
            <p className="text-lg">Subtitle 2</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              src={developerImg}
              alt="BRND hero image"
              className="object-cover"
            />
            <p className="text-2xl">Dev 3</p>
            <p className="text-lg">Subtitle 3</p>
          </div>
        </div>
      </section>
    </>
  );
}
