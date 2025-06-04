'use client';
import React from 'react';
import { Input, Modal, InputNumber } from 'antd';

interface Props {
  open: boolean;
  onClose: () => void;
}
export const RecordItem = ({ onClose, open }: Props) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      title="New Coffee in Stock"
      okButtonProps={{ name: 'Submit' }}
    >
      <form className="w-full mt-[20px]">
        <div className="my-[5px] w-full">
          <InputNumber
            type="text"
            placeholder="Quantity"
            size="large"
            className="!w-full"
          />
        </div>
      </form>
    </Modal>
  );
};
export default RecordItem;
