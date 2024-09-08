var fruits = [];
var list = [];

const fruitList = document.getElementById('fruit-list');

function renderFruits() {
  fruits.forEach(function (fruit, index) {

    list += `<li id='fruit-${index}'>${fruit}</li>`;

  });

  fruitList.innerHTML = list;

  list = '';

}

function addFruit(fruit) {

  if (fruits[fruit] > 0) {

  }

  fruits.push(fruit);

  renderFruits();
}

addFruit('Abacate');
addFruit('Limão');
addFruit('Graviola');
addFruit('Beterraba');
