'use client';
import React from 'react';
import { Icon as Iconify } from '@iconify/react';

type Props = {
  icon: string;
};

export const Icon = ({ icon }: Props) => {
  return <Iconify icon={icon} width={20} />;
};
