import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CartActions from '../actions/cart';
import Shelf from './shelf';

class Cart extends Component {

  render() {
    const CartItems = this.props.cart.map((item, idx) => {
      return <li key={idx}>{item}</li>;
    })
    return (
      <div>
        <Shelf addItem={this.props.action.addToCart} />
        <h2>Cart Items</h2>
        <ol>
          {CartItems}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: bindActionCreators(CartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
