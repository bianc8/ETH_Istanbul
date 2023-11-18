"use client";

import { ApolloWrapper } from "@/app/ApolloWrapper";
import { Web3ModalProvider } from "@/context/Web3Modal";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Web3ModalProvider>
        <ApolloWrapper>{children}</ApolloWrapper>
      </Web3ModalProvider>
    </>
  );
};

export default AppWrapper;
