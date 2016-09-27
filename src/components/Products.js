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
    products.filter(filterByCategory);

    let filterByCategory = (item) => {
      this.productsArray.map((c) => {
        if(item.category === c.category){
          if(!c.products){
            c.products = [];
          } else {
            c.products.push(item);
          }
        }
      })
    }
    return(
      <ul className="Products">
        {this.mountTable()}
      </ul>
    )
  }

  mountTable(){
    let listItems = products.map((item) =>{
      return (
          <li key={item.name} className="list-item">
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
    return (
      <div>
        <h3 className="title"> Produtos </h3>
        <Tabs
          onSelect={this.handleSelect}
          selectedIndex={1}
        >
        {this.mountTabs()}
        </Tabs>
        {this.mountTable()}
      </div>
    );
  }
}

export default Products;
