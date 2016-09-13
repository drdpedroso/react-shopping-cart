import React, { Component } from 'react';
import Products from './Products'
import Cart from './Cart'
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
      // let newA = this.state.products.push(product);
      // console.log(newA);
    
      this.setState({
        products: this.state.products.concat([product])
      });
      console.log(this.state.products);
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
          <Cart products={this.state.products} total={this.state.total}/>
        </div>
      </div>
    );
  }
}

export default App;
