import axios from 'axios';

import { BASE_URL } from './api';

export const getContactsServer = async () => {
  const { data } = await axios(BASE_URL);
  return data;
};
