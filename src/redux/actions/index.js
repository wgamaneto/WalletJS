// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const USER_WALLET = 'USER_WALLET';

export const getEmail = (email) => ({
  type: USER_EMAIL,
  payload: email,
});
