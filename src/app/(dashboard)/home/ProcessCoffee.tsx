'use client';
import React from 'react';
import { Modal, InputNumber, Alert } from 'antd';
import { processCoffee } from './Action';
import { recordInStockSchema } from './Schema';
import { useFormik } from 'formik';
import { InputError } from '@/components/Shared/Error/InputError';

interface Props {
  open: boolean;
  onClose: (reload?: boolean) => void;
}

export const ProcessCoffee = ({ onClose, open }: Props) => {
  const [success, setSuccess] = React.useState<boolean>();

  const [message, setMessage] = React.useState<string>();

  const formik = useFormik({
    validationSchema: recordInStockSchema,
    initialValues: { quantity: '' },
    onSubmit: async (values, helpers) => {
      const send = await processCoffee({
        quantity: Number(values.quantity),
        unit: 'kg',
      });

      setSuccess(send.success);

      if (send.success) {
        setMessage('Saved successfully');
        helpers.resetForm();
      } else {
        setMessage(send.message ?? 'Something went wrong');
      }
    },
  });

  const { values, errors } = formik;

  React.useEffect(() => {
    if (success) {
      setTimeout(() => {
        onClose(true);
      }, 2000);
    }
  }, [success, onClose]);

  return (
    <Modal
      open={open}
      onCancel={() => onClose(false)}
      title="Process Coffee"
      okButtonProps={{
        name: 'Submit',
        type: 'primary',
        onClick: () => formik.submitForm(),
      }}
    >
      <div className="w-full mt-[20px]">
        {message && (
          <Alert
            message={message}
            type={success ? 'success' : 'error'}
            className="my-4"
          />
        )}
        <div className="my-[5px] w-full">
          <InputNumber
            type="text"
            placeholder="Quantity"
            size="large"
            className="!w-full"
            name="quantity"
            value={values.quantity}
            onChange={(value) => formik.setFieldValue('quantity', value)}
          />
        </div>
        <InputError error={errors.quantity} />
      </div>
    </Modal>
  );
};
export default ProcessCoffee;
