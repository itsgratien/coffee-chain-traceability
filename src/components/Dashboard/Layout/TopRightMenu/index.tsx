'use client';
import React from 'react';
import cn from 'classnames';
import { Search } from './Search';
import { Icon } from '@iconify/react';
import styles from './Styles.module.scss';
import { LanguageSelector } from '@/components/Shared/LanguageSelector';

export const TopRightMenu = () => {
  return (
    <div className={cn('relative flex justify-end items-center')}>
      <ul className={cn('flex items-center', styles.topMenu)}>
        <li>
          <Search />
        </li>
        <li>
          <button
            type="button"
            className={cn('border-none outline-none', 'focus:outline-none')}
          >
            <Icon icon={'clarity:notification-line'} width={24} />
          </button>
        </li>
        <li>
          <button
            type="button"
            className={cn('border-none outline-none', 'focus:outline-none')}
          >
            <Icon icon={'flowbite:exclamation-circle-outline'} width={24} />
          </button>
        </li>
        <li className="text-[#001868]">
          <LanguageSelector globeIconSize={24} />
        </li>
      </ul>
    </div>
  );
};
export default TopRightMenu;
