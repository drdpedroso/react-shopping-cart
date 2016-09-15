import React, { Component } from 'react';
import '../css/App.css';
import '../css/Cart.css';

class Cart extends Component {

    mountTable(){
      let listItems = this.props.products.map((item) =>{
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
      </div>
    );
  }
}

export default Cart;
