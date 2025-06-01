'use client';
import React from 'react';
import cn from 'classnames';
import styles from './Styles.module.scss';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { Icon } from './Icon';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Dashboard',
    key: 'dashboard',
    icon: <Icon icon={'radix-icons:dashboard'} />,
  },
  {
    label: 'Settings',
    key: 'SubMenu',
    icon: <Icon icon={'hugeicons:file-euro'} />,
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
        className={cn('bg-transparent', styles.menu)}
      />
    </div>
  );
};
export default SidebarMenu;
