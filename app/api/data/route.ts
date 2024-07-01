import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export const GET = auth(async (req) => {
  if (req.auth) return NextResponse.json(req.auth);
  return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
});
