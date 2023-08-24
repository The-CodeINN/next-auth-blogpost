'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Heading from '@/components/Heading';
import Input from '@/components/Input';

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });

  return (
    <>
      <Heading heading='Sign Up' description='Sign up to access your account' />
      <hr className='bg-neutal-400 w-full h-px' />
      <Input
        id='name'
        label='Name'
        disabled={isLoading}
        required
        register={register}
        errors={errors}
      />
    </>
  );
};

export default RegisterForm;
