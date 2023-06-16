import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'components/api/api';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
        url: 'contacts',
      }),
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;
