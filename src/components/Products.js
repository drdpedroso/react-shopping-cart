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

  selectProduct(item){
    this.props.addProduct(item);
  }

  mountTabs(){
    let categories =  products.map((p) => {

    });
    let tabs = products.map((p) => {
      return(
        <Tab>{p.category}</Tab>
      )
    });

    console.log(this.tabs);
    return(
      <TabList className="tabs-menu">
        {tabs}
      </TabList>
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
          selectedIndex={0}
        >
        {this.mountTabs()}
        </Tabs>
        <ul className="Products">
          {this.mountTable()}
        </ul>
      </div>
    );
  }
}

export default Products;
