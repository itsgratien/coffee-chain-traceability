import React from 'react';
import { getContract } from '@/utils/getContract';
import { useWallet } from '@/lib/Wallet';

export const useContract = () => {
  const { account, contract } = useWallet();

  const submitBatch = async (
    batchId: string,
    quantity: number,
    processedDate: number,
  ) => {
    if (contract) {
      const tx = await contract.submitBatch(batchId, quantity, processedDate);
      await tx.wait(); // Wait for confirmation
    }
  };

  const getBatch = async (batchId: string) => {
    if (contract) {
      return await contract.getBatch(batchId);
    }

    return undefined;
  };

  const getAllBatchIds = async (contract: any) => {
    try {
      // const d = await contract.interface.getFunction('getAllBatchIds');
      // console.log('d+++', d);
      const data = await contract.getAllBatchIds();
      return data;
    } catch (error) {
      console.log('aha++++', error);
    }
  };

  return {
    submitBatch,
    getBatch,
    getAllBatchIds,
  };
};
