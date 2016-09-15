import React, { Component } from 'react';
import '../css/Products.css';

const products = [
  {name:'esfiha', price:'10', qtd: 1},
  {name:'café', price:'2', qtd: 1}
];


class Products extends Component {

  selectProduct(item){
    this.props.addProduct(item);
  }

  mountTable(){
    let listItems = products.map((item) =>{
      return (
          <li key={item.name}>
            {item.name} {item.price}
            <button onClick={this.selectProduct.bind(this, item)}></button>
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
        <ul className="Products">
          {this.mountTable()}
        </ul>
      </div>
    );
  }
}

export default Products;
