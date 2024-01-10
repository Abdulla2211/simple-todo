import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_HOST}/api`,
  credentials: 'include',
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  await mutex.waitForUnlock();

  let baseResult = await baseQuery(args, api, extraOptions);

  if (baseResult.error && baseResult.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      release();
    } else {
      await mutex.waitForUnlock();
      baseResult = await baseQuery(args, api, extraOptions);
    }
  }
  return baseResult;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
