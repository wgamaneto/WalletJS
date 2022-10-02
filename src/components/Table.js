import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getChange, getDelete } from '../redux/actions';

class Table extends Component {
  handleClick = (id, fixed) => {
    const { dispatch, expenses } = this.props;
    const exclui = expenses.filter((element) => element.id !== id);
    dispatch(getDelete(exclui));
    dispatch(getChange(fixed));
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>

          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        <tbody>
          {expenses.map((element) => {
            const converter = Number(element.exchangeRates[element.currency].ask)
              * Number(element.value);
            const casas = converter.toFixed(2);
            const currency = Number(
              element.exchangeRates[element.currency].ask,
            );
            return (
              <tr key={ element.id }>
                <td>{element.description}</td>
                <td>{element.tag}</td>
                <td>{element.method}</td>
                <td>{Number(element.value).toFixed(2)}</td>
                <td>{element.exchangeRates[element.currency].name}</td>
                <td>{currency.toFixed(2)}</td>
                <td>{casas}</td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => this.handleClick(element.id, casas) }
                  >
                    Excluir
                  </button>

                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
Table.propTypes = {
  dispatch: PropTypes.func,
  expenses: PropTypes.array,

}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Table);
