'use server';

import { cookies } from 'next/headers';

export const getUserID = async (): Promise<string | undefined> => {
  const cookieStore = await cookies();
  const myCookie = cookieStore.get('userID')?.value;
  return myCookie;
}

export const getAccessToken = async (): Promise<string | undefined> => {
  const cookieStore = await cookies();
  const myCookie = cookieStore.get('access_token')?.value;
  return myCookie;
}

export const setAccessToken = async (access_token: string): Promise<void> => {
  const cookieStore = await cookies();
  cookieStore.set('access_token', access_token);
}

export const getRefreshToken = async (): Promise<string | undefined> => {
  const cookieStore = await cookies();
  const myCookie = cookieStore.get('refresh_token')?.value
  return myCookie;
}