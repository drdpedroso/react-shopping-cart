import React, { Component } from 'react';
import '../css/App.css';
import '../css/Cart.css';

import Checkout from './Checkout';

let cartTotal = 0;

class Cart extends Component {

    mountTable(){
      let listItems = this.props.products.map((item) =>{
      if(item.qtd > 1){
        cartTotal += item.price;
      } else {
        cartTotal = item.price;
      }
      return (
          <li key={item.name}>
            {item.name} R${item.total} {item.qtd}
          </li>
        );
      });
      if(listItems){
        return (
          <div>
            <ul className="Cart">
              {listItems}
            </ul>
          </div>
        );
      } else {
        return (
          <div>
            <h3>Seu Carrinho está vazio</h3>
          </div>
        );
      }
    }

  render() {
    return (
      <div>
        <h3 className="title"> Carrinho </h3>
          {this.mountTable()}
          Total: {cartTotal}
          <Checkout checkout={this.props.checkout.bind(this)}></Checkout>
      </div>
    );
  }
}

export default Cart;
