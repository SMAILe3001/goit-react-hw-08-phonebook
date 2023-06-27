export const getTokenHeaders = (headers, { getState }) => {
  const token = getState().token.token;
  if (token) {
    headers.set('authorization', `Bearer ${token}`);
  }
  return headers;
};
