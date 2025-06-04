'use client';
import React from 'react';
import cn from 'classnames';
import { CustomSelect } from '../CustomSelect';
import { UserChart } from './UserChart';

const listItems = [
  { name: 'Total users', key: '1' },
  { name: 'Total parcels', key: '2' },
  { name: 'Total revenue', key: '3' },
];

export const Chart = () => {
  return (
    <div
      className={cn(
        'relative w-full p-[30px] bg-white border border-[#E6EBFA]',
        'rounded-[10px]',
      )}
    >
      <div className="grid grid-cols-[350px_350px] items-center justify-between">
        <ul className={cn('grid grid-cols-[1fr_1fr_1fr] gap-[30px]')}>
          {listItems.map((item) => (
            <li
              key={item.key}
              style={{ color: 'rgba(0, 0, 0, 0.4)' }}
              className="text-[14px] cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
        <ul
          className={cn(
            'grid grid-cols-[1fr_1fr_1fr] gap-[30px] items-center',
            'cursor-pointer',
          )}
        >
          <li
            className={cn(
              'text-[12px] grid grid-cols-[10px_1fr] gap-[5px] items-center',
            )}
          >
            <div
              className={cn('w-[10px] h-[10px] rounded-full bg-black')}
            ></div>
            <div>This year</div>
          </li>
          <li
            className={cn(
              'text-[12px] grid grid-cols-[10px_1fr] gap-[5px] items-center',
            )}
          >
            <div
              className={cn('w-[10px] h-[10px] rounded-full bg-[#AEC7ED]')}
            ></div>
            <div>Last year</div>
          </li>
          <li className={cn('w-full')}>
            <CustomSelect
              options={[{ label: 'Rwanda', value: 'rwanda' }]}
              placeholder="Country"
              size="middle"
            />
          </li>
        </ul>
      </div>
      <div className="relative mt-[20px]">
        <UserChart />
      </div>
    </div>
  );
};
export default Chart;
