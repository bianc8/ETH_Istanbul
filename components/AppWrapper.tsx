"use client";

import { ApolloWrapper } from "@/app/ApolloWrapper";
import { Web3ModalProvider } from "@/context/Web3Modal";
import { Toaster } from "react-hot-toast";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Web3ModalProvider>
        <ApolloWrapper>{children}</ApolloWrapper>
      </Web3ModalProvider>
      <Toaster position="bottom-center" reverseOrder={false} gutter={8} toastOptions={
        {
          duration: 5000,
          
        }
      }/>
    </>
  );
};

export default AppWrapper;
