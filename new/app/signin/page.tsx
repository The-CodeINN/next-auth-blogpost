import SignInForm from "@/components/SignInForm";

const SignInPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>Sign In</h1>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
