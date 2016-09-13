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
    console.log(this.state.products);
    let newA = this.state.products;
    newA.map((i) =>{
      if(i == product){
        product.price = product.price + product.price;
        newA.push(product);
      } else {
      }
    })
        newA.push(product);

    // if(this.state.products.length > 0){
    //   this.state.products.map((p)=>{
    //     if(p.name == product.name){
    //         if(p.qtd == NaN){
    //           p.qtd = 0;
    //           p.qtd = p.qtd + 1;
    //         } else {
    //           p.qtd = p.qtd + 1;
    //         }
    //         newA.push(p);
    //         this.setState({
    //           products : this.newA
    //         })
    //     } else {
          this.setState({
            products: newA
          });
    //     }
    //   })
    // } else {
    //     this.setState({
    //         products: this.state.products.concat([product])
    //     });
    // }

    

      console.log(newA);
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
