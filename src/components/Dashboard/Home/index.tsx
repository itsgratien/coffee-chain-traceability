'use client';
import React from 'react';
import cn from 'classnames';
import { CustomSelect } from './CustomSelect';
import { Statistic } from './Statistic';
import { Chart } from './Chart';

export const Home = () => {
  return (
    <>
      <section className="relative">
        <div className="relative flex items-center justify-between">
          <div className="relative">
            <span className="font-bold">Overview</span>
          </div>
          <div className="relative w-[120px]">
            <CustomSelect
              options={[{ label: 'Today', value: 'today' }]}
              value={'today'}
              size="middle"
            />
          </div>
        </div>
        <div className="relative mt-[20px]">
          <Statistic />
        </div>
      </section>
      <section className={cn('relative my-[30px]')}>
        <Chart />
      </section>
    </>
  );
};
export default Home;
