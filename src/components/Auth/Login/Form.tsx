'use client';
import React from 'react';
import { Input, Button } from 'antd';
import { useFormik } from 'formik';
import cn from 'classnames';
import styles from './Styles.module.scss';
import Link from 'next/link';
import { object, string } from 'yup';
import { InputError } from '@/components/Shared/Error/InputError';
import { useRouter } from 'next/navigation';

const schema = object().shape({
  email: string().required().email(),
  password: string().required(),
});

export const LoginForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: schema,
    onSubmit: () => {
      router.push('/home');
    },
  });

  const { values, handleChange, handleSubmit, errors } = formik;
  return (
    <div className={cn(styles.loginForm)}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="relative my-[20px]">
          <Input
            type="text"
            placeholder="Username"
            name="email"
            value={values.email}
            onChange={handleChange}
            size="large"
          />
          <InputError error={errors?.email} />
        </div>
        <div className="relative mt-[20px] mb-[10px]">
          <Input.Password
            type="text"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            size="large"
          />
          <InputError error={errors?.password} />
        </div>
        <div className="relative flex justify-end">
          <Link href={'#'} className="text-primary">
            Forgot Password
          </Link>
        </div>
        <div className="relative my-[20px] flex">
          <Button
            type="primary"
            size="large"
            className={cn('!h-[50px]')}
            htmlType="submit"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
