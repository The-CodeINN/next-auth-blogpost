import SignUpForm from '@/components/SignUpForm';

const SignUpPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>Sign Up</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
