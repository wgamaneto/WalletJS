import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    disableBtn: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.handleVerify());
  };

  handleVerify = () => {
    const { email, password } = this.state;
    const number = 5;
    const passwordVerify = password.length > number;
    const emailRgx = /\S+@\S+\.\S+/;
    const emailVerify = emailRgx.test(email);
    if (passwordVerify && emailVerify) {
      this.setState({ disableBtn: false });
    } else {
      this.setState({ disableBtn: true });
    }
  };

  handleClick = () => {
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(getEmail(email));
    history.push('/carteira');
  };

  render() {
    const { disableBtn } = this.state;
    return (
      <form>
        <input
          data-testid="email-input"
          name="email"
          type="email"
          placeholder="Email"
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          name="password"
          type="password"
          placeholder="Senha"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ disableBtn }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect()(Login);
