// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const USER_WALLET = 'USER_WALLET';
export const FORM_CURRENCY = 'FORM_CURRENCY';
export const REQUEST_API = 'REQUEST_API';
export const ERROR = 'ERROR';
export const USER_TOTAL = 'USER_TOTAL';

export const getEmail = (email) => ({
  type: USER_EMAIL,
  payload: email,
});

export const userWallet = (expenses) => ({
  type: USER_WALLET,
  payload: expenses,
});

export const getCurrency = (currencies) => ({
  type: FORM_CURRENCY,
  currencies,
});

export const requestAPI = () => ({
  type: REQUEST_API,
});

export const getTotal = (total) => ({
  type: USER_TOTAL,
  total,
});

export const errorRequest = (error) => ({
  type: ERROR,
  error,
});

export function apiFetch() {
  return async (dispatch) => {
    dispatch(requestAPI());
    try {
      await fetch('https://economia.awesomeapi.com.br/json/all')
        .then((response) => response.json())
        .then((json) => dispatch(
          getCurrency(Object.keys(json).filter((element) => element !== 'USDT')),
        ));
    } catch (error) {
      dispatch(failedRequest(error.message));
    }
  };
}
export function apiCotation(param) {
  return async (dispatch) => {
    dispatch(requestAPI());
    try {
      const url = 'https://economia.awesomeapi.com.br/json/all';
      const response = await fetch(url);
      const data = await response.json();
      const total = data[param.currency].ask * param.value;
      dispatch(userWallet({ ...param, exchangeRates: data }));
      dispatch(getTotal(total));
    } catch (error) {
      dispatch(failedRequest(error.message));
    }
  };
}
