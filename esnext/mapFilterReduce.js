
//filter() - Filtra um array
const items = [{
    nome:"TV",
    preço:100,
    tipo:"eletrodomestico"},
    {nome:"radio",
    preço:60,
    tipo:"eletrodomestico"},
    {nome:"baralho",
    preço:10,
    tipo:"jogo"}
]
//exemplo de filter
const naoEletrodomestico = items.filter(item => item.tipo !== 'eletrodomestico');

console.log(naoEletrodomestico);

//map() - Executa uma função em todos os itens de um array
//sintaxe
const productsPrices = [100, 150, 300];
const productsDiscount = productsPrices.map(price => {
    return price * 0.9;
  });

const descontoItems = Object.keys(items).map(key => items[key]['preço'] *=0.9)
console.log(descontoItems)

//reduce() - Reduz um array em um único resultado
const annualBilling = [1500, 1800, 700, 5000, 1600, 18000];
const totalBilling = annualBilling.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0);

console.log(totalBilling)


//Usando todos os métodos juntos
const employees = [{
    name: 'Luke',
    department: 'Financeiro',
    salary: 1500
  }, {
    name: 'Han',
    department: 'Financeiro',
    salary: 1200
  }, {
    name: 'Ben',
    department: 'Marketing',
    salary: 2000
  }, {
    name: 'Leia',
    department: 'Marketing',
    salary: 1750
  }, {
    name: 'Rey',
    department: 'Financeiro',
    salary: 1000
  }]

  //método extenso, com os returns explicitos
  const totalSalary = employees.filter(employee => {
    return (employee.department === 'Financeiro');
  }).map(item => {
    return item.salary *= 1.5;
  }).reduce((total, currentValue) => {
    return total + currentValue;
  });

  //método simplificado mais legível
  const totalSalary2 = employees
    .filter(employee => (employee.department === 'Financeiro'))
    .map(item => item.salary *= 1.5)
    .reduce((total, currentValue) => total + currentValue);