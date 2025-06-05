'use client';
import React from 'react';
import { Alert, Button, List, Tag, Card } from 'antd';
import { viewBatches, type ProcessedCoffee } from './Action';
import { useHome } from './Home';
import { ProcessingStatus } from './Constant';
import { Icon } from '@iconify/react';
import styles from './Styles.module.scss';
import cn from 'classnames';

interface Props {
  reload?: boolean;
}
export const ViewProcessedCoffee = ({ reload }: Props) => {
  const [loading, startTransition] = React.useTransition();

  const [items, setItems] = React.useState<ProcessedCoffee[]>();

  const [message, setMessage] = React.useState<string>();

  const {} = useHome();

  React.useEffect(() => {
    startTransition(async () => {
      const find = await viewBatches();

      if (find.success && find.data) {
        setItems(find.data);
      } else {
        setMessage(find.message ?? 'Unable to fetch data');
      }
    });
  }, [reload]);

  if (message && !loading) {
    return <Alert type="error" message={message} />;
  }

  return (
    <Card className="overflow-auto h-[500px]">
      <List
        loading={loading}
        itemLayout="horizontal"
        dataSource={items}
        renderItem={(item, index) => (
          <List.Item
            key={index}
            actions={[
              <Button
                type="link"
                key={'export'}
                shape="round"
                className={cn(
                  '!flex !items-center !p-[0] uppercase',
                  styles.exportBtn,
                )}
                icon={
                  <Icon
                    icon={'material-symbols-light:file-export'}
                    width={20}
                    className="mt-[3px]"
                  />
                }
              >
                Export
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={item.batch_number}
              description={
                <div className="relaitve">
                  <div>
                    {item.quantity} {item.unit}
                  </div>
                  <div className="mt-[5px]">
                    <Tag
                      color={
                        item.status === ProcessingStatus.EXPORTED
                          ? 'success'
                          : 'blue'
                      }
                      className="!text-[10px]"
                    >
                      {item.status}
                    </Tag>
                  </div>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default ViewProcessedCoffee;
