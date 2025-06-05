'use client';
import React from 'react';
import { useContract } from './useContract';
import { useWallet } from '@/lib/Wallet';

export const ViewExportedBatches = () => {
  const [items, setItems] = React.useState<any>();

  const [loading, startTransition] = React.useTransition();

  const { getAllBatchIds } = useContract();

  const { contract } = useWallet();

  React.useEffect(() => {
    if (contract) {
      startTransition(async () => {
        const send = await getAllBatchIds(contract);

        if (send) {
          setItems(send);
        }
      });
    }
  }, [contract, getAllBatchIds]);

  return <></>;
};
export default ViewExportedBatches;
