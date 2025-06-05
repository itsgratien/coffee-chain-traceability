'use client';
import React from 'react';
import { Button } from 'antd';
import { RecordItem } from './RecordItem';
import { Logo } from '@/components/Shared/Logo';
import cn from 'classnames';
import { Spinner } from '@/components/Shared/Spinner';
import { ProcessCoffee } from './ProcessCoffee';
const ViewStock = React.lazy(() => import('./ViewStock'));
const ViewProcessedCoffee = React.lazy(() => import('./ViewProcessedCoffee'));
const ViewExportedCoffee = React.lazy(() => import('./ViewExportedBatches'));
import { useContract } from './useContract';

const HomeContext = React.createContext<{
  reloadStock: boolean;
  toggleProcessCoffee?: () => void;
}>({
  reloadStock: false,
});

export const useHome = () => React.useContext(HomeContext);

export const Home = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const [openProcessor, setOpenProcessor] = React.useState<boolean>(false);

  const [reloadStock, setReloadStock] = React.useState<boolean>(false);

  const [reloadBatch, setReloadBatch] = React.useState<boolean>(false);

  const { getAllBatchIds } = useContract();

  const toggleProcessCoffee = React.useCallback(() => {
    setOpenProcessor(!openProcessor);
  }, [openProcessor]);

  const ctxValue = React.useMemo(
    () => ({ reloadStock, toggleProcessCoffee }),
    [reloadStock, toggleProcessCoffee],
  );

  return (
    <HomeContext.Provider value={ctxValue}>
      <div className="container mx-auto pt-[100px]">
        <div className="flex items-center justify-center">
          <Logo width="150px" />
        </div>
        <div className="mt-[50px] flex items-center justify-center">
          <Button type="primary" size="large" onClick={() => setOpen(true)}>
            Add in Stock
          </Button>
        </div>
        {open && (
          <RecordItem
            open={open}
            onClose={(reload) => {
              setOpen(false);
              if (typeof reload === 'boolean' && reload) {
                setReloadStock(reload);
              }
            }}
          />
        )}
        {openProcessor && (
          <ProcessCoffee
            open={openProcessor}
            onClose={(reload) => {
              setOpenProcessor(false);
              setReloadBatch(true);
              setReloadStock(true);
            }}
          />
        )}
        <div
          className={cn(
            'grid grid-cols-[400px_2px_400px_2px_400px] justify-center',
            'mt-[50px]',
          )}
        >
          <div className="relative p-[50px]">
            <React.Suspense fallback={<Spinner />}>
              <ViewStock reload={reloadStock} />
            </React.Suspense>
          </div>
          <div className="bg-[#ddd] w-[1px] h-[200px] mt-[50px]"></div>
          <div className="relative p-[10px]">
            <React.Suspense fallback={<Spinner />}>
              <ViewProcessedCoffee reload={reloadBatch} />
            </React.Suspense>
          </div>
          <div className="bg-[#ddd] w-[1px] h-[200px] mt-[50px]"></div>
          <div className="p-[20px]">
            <React.Suspense fallback={<Spinner />}>
              <ViewExportedCoffee />
            </React.Suspense>
          </div>
        </div>
      </div>
    </HomeContext.Provider>
  );
};
export default Home;
