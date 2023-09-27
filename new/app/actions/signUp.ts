'use server';

import prisma from '@/app/libs/prismadb';
import bcrypt from 'bcrypt';

export const signUp = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    return 'User with that email already exists';
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      hashedPassword,
    },
  });

  return 'Account created successfully';
};
