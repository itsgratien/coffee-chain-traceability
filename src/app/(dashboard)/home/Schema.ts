import { object, number } from 'yup';

export const recordInStockSchema = object().shape({
  quantity: number()
    .required('Quantity is required')
    .integer('Quantity must be an integer')
    .positive('Quantity must be positive number')
    .typeError('Quantity must be valid number'),
});
