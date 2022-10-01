// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_EMAIL, USER_TOTAL } from '../actions';

const INITIAL_STATE = {
  email: '',
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

  default:
    return state;
  }
};

export default user;
