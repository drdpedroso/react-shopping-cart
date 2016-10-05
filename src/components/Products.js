import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../css/App.css';
import '../css/Products.css';

const products = [
  {name:'esfiha', price:10, qtd: 1, category: 'esfihas'},
  {name:'esfiha 2', price:20, qtd: 1, category: 'esfihas'},
  {name:'esfiha 3', price:5, qtd: 1, category: 'sobremesas'},
  {name:'esfiha 4', price:30, qtd: 1, category: 'esfihas'},
  {name:'café', price:2, qtd: 1, category: 'bebidas'}
];


class Products extends Component {

  constructor(){
    super();
    this.categories = [];
    this.productsArray = [{
      category : '',
      products: []
    }];
    this.d;
  }


  doReduce(){
    this.d = products.reduce(this.reducer, []);
  }

  reducer(ac, item){
    if(!ac.hasOwnProperty(item.category)){
      ac[item.category] = [];
      ac[item.category].push(item);
    } else {
      let p = products.find(x => x.category == item.category);
      ac[item.category].push(p);
    }
    return ac;
  }

  selectProduct(item){
    this.props.addProduct(item);
  }

  mountTabs(){
    products.map((p) => {
        if(this.categories.indexOf(p.category) < 0){
          this.productsArray.push({
            category: p.category
          })
          this.categories.push(p.category);
        }
    });
    let tabs = this.productsArray.map((c) => {
      return(
        <Tab>{c.category}</Tab>
      )
    });

    return(
      <TabList className="tabs-menu">
        {tabs}
      </TabList>
    )
  }

  mountTabContent() {
    return(
      this.categories.map((item) => {
          return this.mountTable(item)
      })
    )
  }

  mountTable(category){
    let listItems = this.d[category].map((item) => {
      console.log(item)
      return (
          <li className="list-item">
            {item.name} R${item.price}
            <button className="button-add" onClick={this.selectProduct.bind(this, item)}>+</button>
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
    this.doReduce();
    return (
      <div>
        <h3 className="title"> Produtos </h3>
        <Tabs
          onSelect={this.handleSelect}
          selectedIndex={0}
        >
        {this.mountTabs()}
        </Tabs>
        {this.mountTabContent()}
      </div>
    );
  }
}

export default Products;
