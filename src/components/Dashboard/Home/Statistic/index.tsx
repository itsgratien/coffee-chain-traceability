'use client';
import React from 'react';
import cn from 'classnames';
import { StatisticItem } from './StatisticItem';
import { TotalRevenues } from './TotalRevenues';
import { Swiper, SwiperSlide } from 'swiper/react';

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
    <div className={cn('relative grid grid-cols-[368px_1fr]')}>
      <div className="relative">
        <TotalRevenues />
      </div>
      <div className="relative ml-[20px] overflow-auto">
        <div className="relative 2xl:block hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={'auto'}
            navigation
            centeredSlides={false}
          >
            {items.map((item) => (
              <SwiperSlide
                key={item.key}
                style={{ width: '35%', height: '180px' }}
              >
                <StatisticItem {...item} imgSrc={item.src} key={item.key} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="2xl:hidden block">
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            navigation
            centeredSlides={false}
            slidesOffsetAfter={50}
          >
            {items.map((item) => (
              <SwiperSlide
                key={item.key}
                style={{ width: '45%', height: '180px' }}
              >
                <StatisticItem {...item} imgSrc={item.src} key={item.key} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Statistic;
