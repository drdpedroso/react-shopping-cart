let products = [
  {name:'esfiha', price:10, qtd: 1, category: 'esfihas'},
  {name:'esfiha 2', price:20, qtd: 1, category: 'esfihas'},
  {name:'esfiha 3', price:5, qtd: 1, category: 'sobremesas'},
  {name:'esfiha 4', price:30, qtd: 1, category: 'esfihas'},
  {name:'café', price:2, qtd: 1, category: 'bebidas'}
];

let y = [];

let categories = ['esfihas', 'sobremesas', 'bebidas'];

let reducer = (ac, item) => {
  // console.log(item);
  if(!ac.hasOwnProperty(item.category)){
    console.log(item.category);
    ac[item.category] = [];
    ac[item.category].push(item);
  } else {
    let p = products.find(x => x.category == item.category);
    ac[item.category].push(p);
  }
  return ac;
}

let res = products.reduce(reducer, y);

console.log(res);
