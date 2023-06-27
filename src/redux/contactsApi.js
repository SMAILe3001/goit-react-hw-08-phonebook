import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'components/api/api';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
        url: '/contacts',
      }),
      providesTags: ['Contacts'],
    }),
    deleteContacts: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    postContacts: builder.mutation({
      query: data => ({
        url: `/contacts`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const registerApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
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
  useGetContactsQuery,
  useDeleteContactsMutation,
  usePostContactsMutation,
} = contactsApi;

export const {
  usePostRegisterUserMutation,
  usePostLoginUserMutation,
  useGetAuthUserQuery,
  usePostLogOutMutation,
} = registerApi;
