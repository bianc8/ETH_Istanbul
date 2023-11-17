"use client"

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

// 1. Get projectId
const projectId = '07c8eb0913ac95dc00601eaa51a4aa58'

// 2. Set chains
const chains = [
  {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com'
  },
  {
    chainId: 59144,
    name: 'Linea',
    currency: 'ETH',
    explorerUrl: 'https://lineascan.build/',
    rpcUrl: 'https://rpc.linea.build/'
  },
  {
    chainId: 8453,
    name: 'Base',
    currency: 'ETH',
    exploreUrl: 'https://basescan.org/',
    rpcUrl: 'https://base.llamarpc.com'
  }
]



// 3. Create modal
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/']
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: chains,
  projectId
})

export function Web3ModalProvider({ children }: { children: any }) {
  return children;
}