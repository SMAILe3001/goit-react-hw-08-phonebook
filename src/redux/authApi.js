import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'components/api/api';
import { getTokenHeaders } from './getTokenHeaders';

export const registerApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: getTokenHeaders,
  }),
  tagTypes: ['user'],
  endpoints: builder => ({
    postRegisterUser: builder.mutation({
      query: data => ({
        url: '/users/signup',
        method: 'POST',
        body: data,
      }),
      providesTags: ['user'],
    }),
    postLoginUser: builder.mutation({
      query: data => ({
        url: '/users/login',
        method: 'POST',
        body: data,
      }),
      providesTags: ['user'],
    }),
    getAuthUser: builder.query({
      query: () => ({
        url: '/users/current',
        method: 'GET',
      }),
      providesTags: ['user'],
    }),
    postLogOut: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      providesTags: ['user'],
    }),
  }),
});

export const {
  usePostRegisterUserMutation,
  usePostLoginUserMutation,
  useGetAuthUserQuery,
  usePostLogOutMutation,
} = registerApi;
