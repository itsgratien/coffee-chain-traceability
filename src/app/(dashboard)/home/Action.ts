'use server';
import { cookies } from 'next/headers';
import { ProcessingStatus, Storage } from './Constant';

export interface Args {
  quantity: number;
  unit?: string;
}

export interface ProcessedCoffee extends Args {
  batch_number: string;
  status: string;
}

const storeItemInCookies = async ({
  key,
  value,
}: {
  key: string;
  value: string;
}) => {
  const cookiestore = await cookies();

  cookiestore.set(key, value, {
    maxAge: 60 * 60 * 24 * 150, // 5months
    httpOnly: true,
    path: '/',
  });

  return true;
};

export const recordInStock = async ({ quantity, unit = 'kg' }: Args) => {
  try {
    const cookiestore = await cookies();

    const find = cookiestore.get(Storage.stocks);

    const payload = { quantity, unit };

    if (!find || !find.value) {
      await storeItemInCookies({
        key: Storage.stocks,
        value: JSON.stringify(payload),
      });
      return { success: true };
    }

    const data = JSON.parse(find?.value);

    const newItem = {
      quantity: Number(data.quantity) + Number(quantity),
      unit,
    };

    await storeItemInCookies({
      key: Storage.stocks,
      value: JSON.stringify(newItem),
    });

    return { success: true };
  } catch (error) {
    return { success: false, message: 'An error occurred' };
  }
};

export const viewStock = async () => {
  try {
    const cookiestore = await cookies();

    const find = cookiestore.get(Storage.stocks);

    if (!find || !find.value) {
      return { success: false, message: 'No result found' };
    }

    const data = JSON.parse(find.value);

    return { success: true, data };
  } catch (error) {
    return { success: false, message: 'Something went wrong try again later' };
  }
};

export const processCoffee = async ({ quantity }: Args) => {
  try {
    const cookiestore = await cookies();

    // check from stock
    const checkInStock = cookiestore.get(Storage.stocks);

    if (!checkInStock || !checkInStock.value) {
      return { success: false, message: 'No item in stock' };
    }

    const stockData = JSON.parse(checkInStock.value);

    if (Number(stockData.quantity) < Number(quantity)) {
      return {
        success: false,
        message: 'You cannot process more than the available stock',
      };
    }

    const batchNumber = generateBatchNumber();

    const payload = {
      quantity,
      batch_number: batchNumber,
      unit: 'kg',
      status: ProcessingStatus.PROCESSED,
    };

    const find = cookiestore.get(Storage.batches);

    if (!find || !find.value) {
      await storeItemInCookies({
        key: Storage.batches,
        value: JSON.stringify([payload]),
      });

      // reduce stock
      await reduceStock(quantity);
      return { success: true };
    }

    const data = JSON.parse(find.value);

    await storeItemInCookies({
      key: Storage.batches,
      value: JSON.stringify([...data, payload]),
    });
    // reduce stock
    await reduceStock(quantity);

    return { success: true };
  } catch (error) {
    return { success: false, message: 'Something went wrong try again later' };
  }
};

const generateBatchNumber = () => {
  const currentYear = new Date().getFullYear();

  const timestamp = Date.now();

  return `${currentYear}${timestamp}`;
};

export const viewBatches = async () => {
  try {
    const cookiestore = await cookies();

    const find = cookiestore.get(Storage.batches);

    if (!find || !find.value) {
      return { success: false, message: 'No result found' };
    }

    const data = JSON.parse(find.value);

    return { success: true, data };
  } catch (error) {
    return { success: false, message: 'Something went wrong try again later' };
  }
};

export const reduceStock = async (quantity: number) => {
  const cookiestore = await cookies();

  const find = cookiestore.get(Storage.stocks);

  if (!find || !find.value) {
    return false;
  }

  const data = JSON.parse(find.value);

  const remainedQuantity = Number(data.quantity) - Number(quantity);

  await storeItemInCookies({
    key: Storage.stocks,
    value: JSON.stringify({ quantity: remainedQuantity, unit: 'kg' }),
  });

  return true;
};
