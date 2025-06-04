'use client';
import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { Icon } from '@iconify/react';

type Props = {
  imgSrc: string;
  users: number;
  percentage: number;
  payments: number;
};

export const StatisticItem = ({
  imgSrc,
  payments,
  percentage,
  users,
}: Props) => {
  return (
    <div
      className={cn(
        'relative w-full bg-white-blue 2xl:p-[30px] p-[25px] rounded-[10px]',
        'h-full',
      )}
    >
      <div className={cn('grid grid-cols-[1fr_1fr]')}>
        <div
          className={cn(
            'relative rounded-full border border-white-blue',
            '2xl:w-[80px] 2xl:h-[80px] w-[50px] h-[50px]',
          )}
        >
          <Image
            src={imgSrc}
            width={100}
            height={100}
            alt="country-logo"
            className="mx-w-full h-full w-full rounded-full object-cover"
            unoptimized
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[12px]">New Users</span>
          <span className="text-[30px] font-bold">
            {users.toLocaleString()}
          </span>
        </div>
      </div>
      <div
        className={cn(
          'relative grid grid-cols-[1fr_1fr] mt-[15px] pl-[5px]',
          'items-center',
        )}
      >
        <div className="relative 2xl:text-[12px] text-[10px]">
          <span className={cn('text-[#8B97A0]')}>Total</span>
          <span className={cn('text-[#008C5F] font-bold ml-[5px]')}>
            {payments.toLocaleString()}
          </span>
        </div>
        <div
          style={{ border: '1px solid #E9E9E9' }}
          className={cn(
            'relative bg-[#F5F5F5] flex items-center justify-center w-[70px] p-[5px] rounded-[5px]',
            'text-[#888888]',
          )}
        >
          <Icon
            icon={
              'streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow'
            }
            fontSize={20}
          />
          <span className={cn('text-[12px] ml-[5px]')}>{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticItem;
