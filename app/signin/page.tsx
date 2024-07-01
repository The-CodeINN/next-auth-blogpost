'use client';

import AuthButton from '@/components/authButton';
import { LoginGithub } from '@/components/loginGithub';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

const LoginForm = () => {
  return (
    <div className=' w-full flex mt-20 justify-center'>
      <Card className='mx-auto max-w-sm'>
        <form action=''>
          <CardHeader>
            <CardTitle className='text-2xl'>Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='m@example.com'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <div className='flex items-center'>
                  <Label htmlFor='password'>Password</Label>
                  <Link
                    href='#'
                    className='ml-auto inline-block text-sm underline'
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id='password'
                  name='password'
                  placeholder='********'
                  type='password'
                  required
                />
              </div>
              <AuthButton />
              <LoginGithub />
            </div>
            <div className='mt-4 text-center text-sm'>
              Don&apos;t have an account?{' '}
              <Link href='#' className='underline'>
                Sign up
              </Link>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;