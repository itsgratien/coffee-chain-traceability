'use client';
import React from 'react';
import { Statistic, Card, Alert, Button } from 'antd';
import { viewStock, type Args } from './Action';
import { useHome } from './Home';

interface Props {
  reload?: boolean;
}
export const ViewStock = ({ reload }: Props) => {
  const [loading, startTransition] = React.useTransition();

  const [item, setItem] = React.useState<Args>();

  const [message, setMessage] = React.useState<string>();

  const { toggleProcessCoffee } = useHome();

  React.useEffect(() => {
    startTransition(async () => {
      const find = await viewStock();

      if (find.success && find.data) {
        setItem(find.data);
      } else {
        setMessage(find.message ?? 'Unable to fetch data');
      }
    });
  }, [reload]);

  if (message && !loading) {
    return <Alert type="error" message={message} />;
  }

  return (
    <Card variant="borderless">
      <div className="flex justify-between items-start">
        <Statistic
          title="Coffee in Stock"
          value={item?.quantity}
          loading={loading}
        />
        {typeof item?.quantity === 'number' && item.quantity > 0 && (
          <div className="mt-[20px]">
            <Button
              type="dashed"
              size="middle"
              shape="round"
              className="!text-[12px] !text-primary !border-primary"
              onClick={toggleProcessCoffee}
            >
              Process Coffee
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ViewStock;
