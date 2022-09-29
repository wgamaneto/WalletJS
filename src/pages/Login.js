import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    disableBtn: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.state({ [name]: value }, () => this.handleVerify());
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
    dispatch(emailHandler(email));
    history.push('/carteira');
  };

  render() {
    return (
      <form>
        <input
          data-testid="email-input"
          name="email"
          type="email"
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          name="password"
          type="password"
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
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
