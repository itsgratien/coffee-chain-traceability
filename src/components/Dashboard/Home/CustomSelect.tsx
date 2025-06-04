'use client';
import React from 'react';
import { Select, type SelectProps } from 'antd';
import styles from './Styles.module.scss';
import cn from 'classnames';

type Props = {
  options: SelectProps['options'];
  value?: string;
  placeholder?: string;
  size?: SelectProps['size'];
};

export const CustomSelect = ({
  options,
  value,
  placeholder,
  size = 'large',
}: Props) => {
  return (
    <Select
      options={options}
      value={value}
      size={size}
      className={cn('w-full', styles.customSelect)}
      placeholder={placeholder}
    />
  );
};
export default CustomSelect;
