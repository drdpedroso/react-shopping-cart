import React, { Component } from 'react';
import { render } from 'react-dom'

import Products from './Products'
import Cart from './Cart';
import logo from '../logo.svg';
import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      total:0,
    };
  }

  addProduct(product){
    let newA = this.state.products;
    let existingProduct = newA.find((p) => {
        return p.name === product.name;
    });

    if (existingProduct){
        existingProduct.qtd = existingProduct.qtd + 1 || 1;
        existingProduct.total = existingProduct.qtd * JSON.parse(existingProduct.price);
    } else {
      if(product.total === 0 || product.total === undefined) {
        product.total = JSON.parse(product.price);
      }
      newA.push(product);
    }

    this.setState({
      products: newA
    });
  }

  doCheckout(){
    console.log(this.state.products)
  }

  removeProduct(){

  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>

        <div className="wrapper">
          <Products addProduct={this.addProduct.bind(this)} />
          <Cart products={this.state.products} total={this.state.total} checkout={this.doCheckout.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
