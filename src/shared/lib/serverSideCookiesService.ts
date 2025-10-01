import 'server-only'

import { cookies } from 'next/headers';
import { UserState } from '@entities/user';
import { getAuthUserFromToken } from './tokenService';

export const getAuthUserServerSide = async (): Promise<UserState> => {
    const access_token = await getAccessTokenServerSide();
    return getAuthUserFromToken(access_token)
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