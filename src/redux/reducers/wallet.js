// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { USER_WALLET, FORM_CURRENCY } from '../actions';

const INITIAL_STATE = {
  wallet: [],
  currencies: [],
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_WALLET:
    return {
      ...state,
      wallet: [...state.wallet, action.payload],
    };
  case FORM_CURRENCY: {
    return {
      ...state,
      currencies: action.currencies,
    };
  }
  default:
    return state;
  }
};

export default wallet;
