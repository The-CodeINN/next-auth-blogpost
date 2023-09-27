'use client';

import { signUp } from '@/app/actions/signUp';
import { useState } from 'react';

const SignUpFrom = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    setMessage('Signing up...');

    const message = await signUp(email, password);
    setMessage(message);
  };

  return (
    <div className='flex flex-col gap-4'>
      <input
        type='email'
        className=' border-2 border-black rounded-md'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        className=' border-2 border-black rounded-md'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      <p>{message}</p>
    </div>
  );
};

export default SignUpFrom;
