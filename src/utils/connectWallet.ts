import { ethers } from 'ethers';

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      return { provider, signer, address: accounts[0] };
    } catch (err) {
      console.error('Wallet connection error:', err);
      return null;
    }
  } else {
    alert('Please install MetaMask!');
    return null;
  }
};
