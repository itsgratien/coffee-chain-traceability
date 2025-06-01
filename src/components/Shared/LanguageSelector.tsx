'use client';
import React from 'react';
import { Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import { Icon } from '@iconify/react';

const languageItems: MenuProps['items'] = [{ key: '1', label: 'English' }];

type Props = {
  globeIconSize?: number;
};

export const LanguageSelector = ({ globeIconSize = 30 }: Props) => {
  return (
    <Dropdown menu={{ items: languageItems }} trigger={['click']}>
      <Space>
        <Icon icon={'pepicons-pop:internet'} fontSize={globeIconSize} />
        English
        <Icon icon={'cuida:caret-down-outline'} fontSize={20} />
      </Space>
    </Dropdown>
  );
};
export default LanguageSelector;
