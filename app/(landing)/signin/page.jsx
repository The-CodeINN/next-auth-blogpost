import FormWrap from '@/components/FormWrap';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <FormWrap>
        <LoginForm />
      </FormWrap>
    </div>
  );
};

export default LoginPage;
