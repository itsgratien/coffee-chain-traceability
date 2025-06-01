'use client';
import React from 'react';
import { Select, type SelectProps } from 'antd';
import styles from './Styles.module.scss';
import cn from 'classnames';

type Props = {
  options: SelectProps['options'];
  value?: string;
};

export const CustomSelect = ({ options, value }: Props) => {
  return (
    <Select
      options={options}
      value={value}
      size="large"
      className={cn('w-full', styles.customSelect)}
    />
  );
};
export default CustomSelect;
