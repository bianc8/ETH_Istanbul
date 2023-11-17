"use client"


import { MetaMaskButton } from "@metamask/sdk-react-ui";

export default function ConnectButton() {
  return (
    <div className="text-black" style={{color: 'black !important'}}>
      <MetaMaskButton theme={"dark"} color="orange"></MetaMaskButton>
    </div>
  )
}