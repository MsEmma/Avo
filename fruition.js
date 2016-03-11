var data = {
  "Woolingsworth": {
    "apples": 4,
    "bananas": 3,
    "oranges": 12
  },

  "Chockers": {
    "bananas": 2,
    "apples": 5,
    "oranges": 4
  },

  "Pickle_pay": {
    "bananas": 4,
    "oranges": 7
  },

  "Shopwrong": {
    "apples": 2,
    "bananas": 3
  },

  "Kwakspar": {
    "oranges": 9,
    "apples": 4
  }
};

function getFruitMap(fruits) {

  var fruitMap = {};

  for (var shop in data) {
    for (var fruit in data[shop]) {
      if (fruit === fruits) {
        fruitMap[data[shop][fruit]] = shop;
      }
    }
  }

  return fruitMap;
}

var orangesMap = getFruitMap("oranges");

exports.cheapOrangeSeller = function(orangesMap) {

  orangesPricesArray = [];

  for (var price in orangesMap) {
    orangesPricesArray.push(Number(price));
  }

  var cheapestPrice = Math.min.apply(null, orangesPricesArray);
  cheapestOrangesSeller = orangesMap[cheapestPrice];

  return cheapestOrangesSeller;
}
