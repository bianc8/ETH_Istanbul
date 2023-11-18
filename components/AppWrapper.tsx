"use client";

import { Web3ModalProvider } from "@/context/Web3Modal";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Web3ModalProvider>{children}</Web3ModalProvider>
    </>
  );
};

export default AppWrapper;
