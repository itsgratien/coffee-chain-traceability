'use client';
import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import styles from './Styles.module.scss';

export const Profile = () => {
  return (
    <>
      <div
        className={cn(
          'relative grid grid-cols-[50px_1fr] gap-[15px]',
          'p-[20px] pt-[40px]',
          styles.profile,
        )}
      >
        <div
          style={{
            border: '1px solid rgba(242, 199, 186, 1)',
            background: 'rgba(242, 199, 186, 1)',
          }}
          className="w-[50px] h-[50px] rounded-full"
        >
          <Image
            src={'/assets/avatar.png'}
            width={50}
            height={50}
            unoptimized
            alt="avatar"
            className="max-w-[100%] w-[100%] h-[100%] rounded-full"
          />
        </div>
        <div>
          <div>
            <span
              className="uppercase text-[12px]"
              style={{ color: 'rgba(36, 34, 32, 0.4)' }}
            >
              Hello
            </span>
          </div>
          <div>
            <span>Andrew Smith</span>
          </div>
        </div>
      </div>
      <div className={cn(styles.line)}></div>
    </>
  );
};
export default Profile;
