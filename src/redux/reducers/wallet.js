// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { USER_WALLET, FORM_CURRENCY, USER_DELETE } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_WALLET:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case FORM_CURRENCY: {
    return {
      ...state,
      currencies: action.currencies,
    };
  }
  case USER_DELETE: {
    return {
      ...state,
      expenses: action.expenses,
    };
  }
  default:
    return state;
  }
};

export default wallet;
