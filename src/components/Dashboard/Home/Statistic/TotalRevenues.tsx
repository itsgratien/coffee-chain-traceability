'use client';
import React from 'react';
import cn from 'classnames';
import styles from './Styles.module.scss';
import { Icon } from '@iconify/react';

export const TotalRevenues = () => {
  return (
    <div
      className={cn(
        'relative rounded-[10px] cursor-pointer',
        styles.totalRevenue,
      )}
    >
      <div className="relative  p-[20px] pb-[0]">
        <div className="relative">
          <span className={cn('text-[12px] capitalize text-[#84CBFF]')}>
            Total Revenue
          </span>
        </div>
        <div className={cn('relative flex mt-[10px]')}>
          <div className={cn('relative text-[white]')}>
            <span className="font-bold text-[20px]">
              {Number(6123000123).toLocaleString()}
            </span>
          </div>
          <div className="relative ml-[10px]">
            <span className="text-[#84CBFF] font-bold uppercase text-[12px]">
              RWF
            </span>
          </div>
        </div>
        <div className={cn('relative mt-[10px]')}>
          <div className="flex items-center">
            <div className="relative text-[#FFB7B9]">-3.5%</div>
            <div className="ml-[5px]">
              <Icon
                icon={
                  'streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow'
                }
                width={20}
                color="#FFB7B9"
              />
            </div>
            <div className="relative ml-[10px]">
              <span className={cn('text-[#84CBFF] text-[12px]')}>
                Than last month
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn(
          'relative mt-[20px] flex items-center justify-between p-[10px] px-[20px]',
          styles.viewDetails,
        )}
      >
        <div className="relative">
          <span className={cn('text-[#C5C5FF] font-bold text-[12px]')}>
            View details
          </span>
        </div>
        <div>
          <Icon color="#84CBFF" width={14} icon={'akar-icons:question'} />
        </div>
      </div>
    </div>
  );
};
export default TotalRevenues;
