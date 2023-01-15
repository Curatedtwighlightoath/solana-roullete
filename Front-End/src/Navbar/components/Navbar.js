import { Component, useMemo } from "react";
import "./NavbarStyles.css"
import React from "react";

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
require('@solana/wallet-adapter-react-ui/styles.css');

function App() {

    const network = WalletAdapterNetwork.Mainnet;
    const endpoint = "https://api.metaplex.solana.com/";
    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter({ network }),
        ], [network]
    );

    return (

        <nav className="NavbarItems">
            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                    <WalletModalProvider>
                        <WalletMultiButton />
                    </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>
        </nav>
    )
}


export default App;