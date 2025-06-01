'use client';
import React from 'react';
import cn from 'classnames';
import { StatisticItem } from './StatisticItem';

const items = [
  {
    key: '1',
    src: '/assets/country/rwanda.svg',
    users: 560,
    payments: 450,
    percentage: 50,
  },
  {
    key: '2',
    src: '/assets/country/kenya.svg',
    users: 560,
    payments: 450,
    percentage: 50,
  },
  {
    key: '3',
    src: '/assets/country/egypt.svg',
    users: 560,
    payments: 450,
    percentage: 50,
  },
  {
    key: '4',
    src: '/assets/country/ethiopia.svg',
    users: 560,
    payments: 16050,
    percentage: 50,
  },
];
export const Statistic = () => {
  return (
    <div className={cn('relative grid grid-cols-4 gap-[20px]')}>
      {items.map((item) => (
        <StatisticItem {...item} imgSrc={item.src} key={item.key} />
      ))}
    </div>
  );
};
export default Statistic;
