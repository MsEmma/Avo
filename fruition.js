var fruitSellerList = {
  "woolingsworth": {
    "apples": 4,
    "bananas": 3,
    "oranges": 12
  },

  "chockers": {
    "bananas": 2,
    "apples": 5,
    "oranges": 4
  },

  "pickle pay": {
    "bananas": 4,
    "oranges": 7
  },

  "shopwrong": {
    "apples": 2,
    "bananas": 3
  },

  "kwakspar": {
    "oranges": 9,
    "apples": 4
  }
}

var woolies = fruitSellerList.woolingsworth;
var chock = fruitSellerList.chockers;
var pickle = fruitSellerList.picklepay;
var shopw = fruitSellerList.shopwrong;
var kwak = fruitSellerList.kwakspar;


var storeMap = {

  0 : 'Woolingsworth',
  1 : 'Chockers',
  2 : 'Pickle Pay',
  3 : 'Shopwrong',
  4 : 'Kwakspar'

};

var orangePrices = {};

for (var i in woolies) {
  if (i === "oranges") {

    orangePrices[storeMap[0]] = woolies[i];
  }
}

console.log(orangePrices);
