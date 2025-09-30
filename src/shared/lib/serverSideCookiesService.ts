import 'server-only'

import { cookies } from 'next/headers';
import Session from '@shared/types/session';

export const getSession = async (): Promise<Session> => {
  const cookieStore = await cookies();
  const myCookie = cookieStore.get('session')?.value;
  return JSON.parse(myCookie || '{}');
}

export const getAccessTokenServerSide = async (): Promise<string | undefined> => {
  const cookieStore = await cookies();
  const myCookie = cookieStore.get('access_token')?.value;
  return myCookie;
}

export const getRefreshTokenServerSide = async (): Promise<string | undefined> => {
  const cookieStore = await cookies();
  const myCookie = cookieStore.get('refresh_token')?.value
  return myCookie;
}