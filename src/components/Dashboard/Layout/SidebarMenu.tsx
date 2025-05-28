'use client';
import React from 'react';
import cn from 'classnames';
import styles from './Styles.module.scss';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { Icon } from '@iconify/react';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Dashboard',
    key: 'dashboard',
    icon: <Icon icon={'gravity-ui:circles-4-square'} fontSize={25} />,
    className: 'bg-transparent',
  },
  {
    label: 'Settings',
    key: 'SubMenu',
    icon: <Icon icon={'hugeicons:file-euro'} fontSize={25} />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
      },
      {
        type: 'group',
        label: 'Item 2',
      },
    ],
  },
];

export const SidebarMenu = () => {
  const onClick = () => {};
  return (
    <div className="relative bg-transparent my-[10px]">
      <Menu
        onClick={onClick}
        mode="vertical"
        items={items}
        className="bg-transparent"
      />
      ;
    </div>
  );
};
export default SidebarMenu;
