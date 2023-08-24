import FormWrap from '@/components/FormWrap';
import Heading from '@/components/Heading';
import Input from '@/components/Input';
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
