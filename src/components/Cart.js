import React, { Component } from 'react';
import '../css/Cart.css';

class Cart extends Component {

    mountTable(){
    let listItems = this.props.products.map((item) =>{
      return (
          <li key={item.name}> 
            {item.name} {item.price} {item.qtd}
          </li> 
        ); 
      }); 
   
      return (
        <div> 
          <ul> 
            {listItems} 
          </ul> 
        </div> 
      ); 
    }

  render() {
    return (
      <div>
        <ul className="Cart">
          {this.mountTable()}
        </ul>
      </div>
    );
  }
}

export default Cart;
