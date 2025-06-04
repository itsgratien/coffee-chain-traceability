/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import cn from 'classnames';
import { Line } from '@ant-design/plots';
import styles from './Styles.module.scss';

export const UserChart = () => {
  const [data, setData] = React.useState<any>([
    { range: 50, value: '5000' },
    { range: 30, value: '3000' },
    { range: 150, value: '300' },
    { range: 180, value: '400' },
    { range: 220, value: '350' },
    { range: 300, value: '500' },
  ]);

  return (
    <Line data={data} xField={'value'} yField={'range'} colorField={'type'} />
  );
};
