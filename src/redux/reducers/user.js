// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_EMAIL, USER_TOTAL, HANDLE_CHANGE } from '../actions';

const INITIAL_STATE = {
  email: '',
  total: 0,
};
const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_EMAIL:
    return {
      ...state,
      email: action.payload,
    };
  case USER_TOTAL: {
    console.log(state);
    const soma = (Number(state.total) + Number(action.total)).toFixed(2);
    return {
      ...state,
      total: soma,
    };
  }
  case HANDLE_CHANGE: {
    const subtracao = (Number(state.total) - Number(action.payload)).toFixed(2);
    return {
      ...state,
      total: subtracao,
    };
  }

  default:
    return state;
  }
};

export default user;
