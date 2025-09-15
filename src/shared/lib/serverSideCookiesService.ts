'use server';

import { cookies } from 'next/headers';

export const getSession = async (): Promise<string | undefined> => {
  const cookieStore = await cookies();
  const myCookie = cookieStore.get('session')?.value;
  return JSON.parse(myCookie || '{}');
}

export const getAccessTokenServerSide = async (): Promise<string | undefined> => {
  const cookieStore = await cookies();
  const myCookie = cookieStore.get('access_token')?.value;
  return myCookie;
}

export const setAccessTokenServerSide = async (access_token: string): Promise<void> => {
  const cookieStore = await cookies();
  cookieStore.set('access_token', access_token);
}

export const getRefreshTokenServerSide = async (): Promise<string | undefined> => {
  const cookieStore = await cookies();
  const myCookie = cookieStore.get('refresh_token')?.value
  return myCookie;
}

export const setRefreshTokenServerSide = async (refresh_token: string): Promise<void> => {
  const cookieStore = await cookies();
  cookieStore.set('refresh_token', refresh_token);
}