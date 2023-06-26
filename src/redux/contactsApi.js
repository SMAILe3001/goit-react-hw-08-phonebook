import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'components/api/api';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
        url: 'contacts',
      }),
      providesTags: ['Contacts'],
    }),
    deleteContacts: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    postContacts: builder.mutation({
      query: data => ({
        url: `contacts`,
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
    baseUrl: 'https://connections-api.herokuapp.com',
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
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactsMutation,
  usePostContactsMutation,
} = contactsApi;

export const { usePostRegisterUserMutation, usePostLoginUserMutation } =
  registerApi;
