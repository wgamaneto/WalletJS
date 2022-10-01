import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, total } = this.props;
    return (
      <>
        <div>Header</div>
        <>
          <div data-testid="email-field">
            { email }
          </div>
          <div data-testid="total-field">
            { total }
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.user.total,
});

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
}.isRequired;

export default connect(mapStateToProps)(Header);
