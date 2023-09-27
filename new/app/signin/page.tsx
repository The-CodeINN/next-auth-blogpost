import SignUpForm from '@/components/SignUpForm';

const SignInPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>Sign In</h1>
      <SignUpForm />
    </div>
  );
};

export default SignInPage;
