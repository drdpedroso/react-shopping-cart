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

  handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }

  doReduce(){
    this.d = products.reduce(this.reducer, []);
  }

  reducer(ac, item){
    if(!ac.hasOwnProperty(item.category)){
      ac[item.category] = [];
      ac[item.category].push(item);
    } else {
      ac[item.category].push(item);
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
      if(c.category){
        return(
          <Tab>{c.category}</Tab>
        )
      }

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
          return (
            <TabPanel>
              {this.mountTable(item)}
            </TabPanel>
          )
      })
    )
  }

  mountTable(category){
    let listItems = this.d[category].map((item) => {
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
          >
            {this.mountTabs()}
            {this.mountTabContent()}
        </Tabs>

      </div>
    );
  }
}

export default Products;
