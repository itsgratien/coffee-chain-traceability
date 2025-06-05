'use client';
import React from 'react';
import { connectWallet } from '@/utils/connectWallet';
import { getContract } from '@/utils/getContract';

interface Props {
  children: React.ReactNode;
}

export const WalletContext = React.createContext<{
  account?: any;
  contract?: any;
}>({});

export const useWallet = () => React.useContext(WalletContext);

export const Wallet = ({ children }: Props) => {
  const [account, setAccount] = React.useState<any>();

  const [contract, setContract] = React.useState<any>();

  React.useEffect(() => {
    const init = async () => {
      const wallet = await connectWallet();
      if (wallet) {
        const contractInstance = getContract(wallet.signer);

        setAccount(wallet.address);
        setContract(contractInstance);
      }
    };
    init();
  }, []);

  const ctxValue = React.useMemo(
    () => ({ account, contract }),
    [account, contract],
  );

  return (
    <WalletContext.Provider value={ctxValue}>{children}</WalletContext.Provider>
  );
};
export default Wallet;
