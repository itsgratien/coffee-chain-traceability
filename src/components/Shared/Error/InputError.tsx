'use client';
import React from 'react';

type Props = {
  error?: string;
};

export const InputError = ({ error }: Props) => {
  if (!error) {
    return null;
  }

  return (
    <span className="text-red-600 text-[14px] first-letter:capitalize">
      {error}
    </span>
  );
};
export default InputError;
