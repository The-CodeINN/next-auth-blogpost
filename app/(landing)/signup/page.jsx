import FormWrap from '@/components/FormWrap';
import RegisterForm from './RegisterForm';

const SignUpPage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <FormWrap>
        <RegisterForm />
      </FormWrap>
    </div>
  );
};

export default SignUpPage;
