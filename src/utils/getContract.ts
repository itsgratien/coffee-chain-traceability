import { Contract, Signer, ethers } from 'ethers';
import ContractABI from './ContractABI.json';

const CONTRACT_ADDRESS = '0xEeE26f858eD037746729bA4881622c4433f91D9e';

export const getContract = (signer: Signer): Contract => {
  return new ethers.Contract(CONTRACT_ADDRESS, ContractABI, signer);
};
