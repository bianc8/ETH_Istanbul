"use client";

import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MetaMaskUIProvider
        sdkOptions={{
          dappMetadata: {
            name: "Demo UI React App",
          },
        }}
      >
        {children}
      </MetaMaskUIProvider>
    </>
  );
};

export default AppWrapper;
