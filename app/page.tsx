import Image from "next/image";

import heroImg from "@/public/hero-img.png";

import chainlinkLogo from "@/public/chainlink-logo.png";
import easLogo from "@/public/eas-logo.png";
import pushLogo from "@/public/push-logo.png";
import metamaskLogo from "@/public/metamask-logo.png";
import walletConnectLogo from "@/public/walletconnect-logo.png";

import fekaAvatar from "@/public/fekaAvatar.png";
import bianc8Avatar from "@/public/bianc8Avatar.png";
import leoAvatar from "@/public/leoAvatar.png";
import githubLogo from "@/public/github.png";


export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col items-center justify-center w-full h-[80vh] max-h-[80vh] rounded-2xl backdrop-blur-md bg-white/10 relative">
        <Image
          src={heroImg}
          alt="N-hub hero image"
          className="w-full h-full object-fit"
        />
      </section>

      {/* Introduction */}
      <section className="flex flex-col align-center items-center w-[90%] rounded-2xl bg-white/20 border-slate-700 py-12">
        <h1 className="text-5xl">Introduction to the Project</h1>
        <p className="mt-10 max-w-[80%] text-lg items-center text-center">
        Our revolutionary project integrates cutting-edge blockchain technologies to create a multi-chain attestation system. <br/><br/>

We aim to simplify and standardize the issuance and verification of attestations across different blockchains, eliminating the need to transfer funds between networks. <br/><br/>

Our solution offers unprecedented interoperability, enhancing accessibility and efficiency within the blockchain ecosystem.
        </p>
      </section>
      
      
      {/* Features */}
      <section className="flex flex-col w-[90%] items-center text-center rounded-2xl bg-white/20 border-slate-700 p-4">
        <h1 className="text-5xl">Features</h1>
          <div className="grid grid-cols-2 gap-4 mt-10 w-full">
            <div className="flex flex-col items-center p-8 m-2 space-y-3">
              <h1 className="text-2xl">Chainlink</h1>
              <Image src={chainlinkLogo} alt="Chainlink Logo" width={200} height={200} />
              <p className="text-lg">
                In our project, CCIP plays a crucial role in creating multi-chain attestations, allowing them to be recognized and valid on various networks. This facilitates the adoption of attestations on multiple blockchains, making certifications more accessible and usable in different contexts.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 m-2 space-y-3">
              <h1 className="text-2xl">Ethereum Attestation Service (EAS)</h1>
              <Image src={easLogo} alt="EAS Logo" width={200} height={200} />
              <p className="text-lg">
                EAS provides a robust platform for registering and managing blockchain attestations. In our system, EAS is used to create and manage cross-chain attestations.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 m-2 space-y-3">
              <h1 className="text-2xl">Push Protocol</h1>
              <Image src={pushLogo} alt="Meta Push Logo" width={200} height={200} />
              <p className="text-lg">
                We integrate the Push Protocol to send real-time notifications to attestation recipients via MetaMask Snaps. This means that when an attestation is issued or verified, the recipient is immediately informed via a notification, improving the user experience and ensuring that important information is promptly conveyed.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 m-2 space-y-3">
              <h1 className="text-2xl">MetaMask Snap</h1>
              <Image src={metamaskLogo} alt="Meta Push Logo" width={200} height={200} />
              <p className="text-lg">
                Real-time notifications of attestation are sent to MetaMask Snap of Push Protocol. This allows users to receive notifications even when they are not using the application, ensuring that they are always informed about the status of their attestations.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 m-2 col-span-2 space-y-3">
            <h1 className="text-2xl">Wallet Connect</h1>
              <Image src={walletConnectLogo} alt="Wallet Connect Logo" width={200} height={200} />
              <p className="text-lg max-w-lg">We use WalletConnect Modal v3 to ensure a secure and reliable connection between users wallets and our application. This tool is crucial for user authentication and secure interaction with our system, ensuring that only authorized users can access and interact with their attestations.</p>
            </div>
          </div>
      </section>

      {/* Team */}
      <section className="flex flex-col w-[90%] rounded-2xl bg-white/20 border-slate-700 items-center gap-4 p-4">
        <h1 className="text-5xl mb-4">Team</h1>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={fekaAvatar}
              alt="Federico Giannotti Avatar"
              className="object-cover w-500 h-500"
              width={300}
              height={300}
            />
            <p className="text-2xl">Federico Giannotti</p>
            <p className="text-lg">Fullstack Developer</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              src={bianc8Avatar}
              alt="Bianc8.eth Avatar"
              className="object-cover w-500 h-500"
              width={300}
              height={300}
            />
            <p className="text-2xl">Enrico Biancotto</p>
            <p className="text-lg">Frontend Developer</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              src={leoAvatar}
              alt="Leonardo Parmeggiani Avatar"
              className="object-cover w-500 h-500"
              width={300}
              height={300}
            />
            <p className="text-2xl">Leonardo Parmeggiani</p>
            <p className="text-lg">UX/UI Designer</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="flex flex-row items-center justify-around w-[90%] h-[10vh] max-h-[10vh] rounded-2xl bg-white/20 border-slate-700 p-4 mb-4">
        <a href="https://github.com/bianc8/N-hub" target="_blank" className="flex flex-row items-center underline">
          GitHub
        </a>
        <a href="https://nhub.vercel.app/" target="_blank" className="underline">
          Website
        </a>
        <a href="https://nhub.vercel.app/" target="_blank" className="underline">
          Presentation
        </a>
      </section>
    </>
  );
}
