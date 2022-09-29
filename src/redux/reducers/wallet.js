// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { USER_WALLET } from '../actions';

const INITIAL_STATE = {
  wallet: '',
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_WALLET:
    return {
      ...state,
      wallet: action.wallet,
    };
  default:
    return state;
  }
};

export default wallet;
