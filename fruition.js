var inputJSON = {

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

function getFruitList() {

  var fruitList = {};

  for (var shop in inputJSON) {
    for (var fruit in inputJSON[shop]) {
      if (fruitList[fruit] === undefined) {
        fruitList[fruit] = [];
      }
    }
  }

  for (var shop in inputJSON) {
    for (var fruit1 in inputJSON[shop]) {
      for (var fruit in fruitList) {
        if (fruit === fruit1) {
          fruitList[fruit].push({
            "shop": shop,
            "price": inputJSON[shop][fruit1]
          });
        }
      }
    }
  }

  return fruitList;

}

exports.cheapOrangesSeller = function(fruitList) {

  fruitList.oranges.sort(function(a, b) {
    return a.price - b.price
  })

  var cheapOranShop = fruitList.oranges[0];
  var cheapestOrangesSeller = cheapOranShop.shop

  return (cheapestOrangesSeller);

}

exports.appleSellersPricesAsc = function(fruitList) {

  fruitList.apples.sort(function(a, b) {
    return a.price - b.price
  })

  return (fruitList.apples);

}

exports.appleSellersPricesDesc = function(fruitList) {

  fruitList.apples.sort(function(a, b) {
    return b.price - a.price
  })

  return (fruitList.apples);

}

exports.cheapestFruit = function(fruitList) {

  var priceList = [];

  for (fruit in fruitList) {
    for (i = 0; i < fruitList[fruit].length; i++) {
      priceList.push(fruitList[fruit][i].price);
    }
  }

  var cheapestFruits = [];

  var cheapestPrice = Math.min.apply(null, priceList);

  for (fruit in fruitList) {
    for (i = 0; i < fruitList[fruit].length; i++) {
      if (fruitList[fruit][i].price === 2) {
        cheapestFruits.push(fruit);
      }
    }
  }

  return (cheapestFruits);

}

exports.cheapestFruitsSeller = function(fruitList) {

  var priceList = [];

  for (fruit in fruitList) {
    for (i = 0; i < fruitList[fruit].length; i++) {
      priceList.push(fruitList[fruit][i].price);
    }
  }

  var cheapestFruitsSellers = [];

  var cheapestPrice = Math.min.apply(null, priceList);

  for (fruit in fruitList) {
    for (i = 0; i < fruitList[fruit].length; i++) {
      if (fruitList[fruit][i].price === 2) {
        cheapestFruitsSellers.push(fruitList[fruit][i].shop);
      }
    }
  }

  return (cheapestFruitsSellers);

}


exports.orangeSellerList = function(fruitList) {

  orangeShops = [];

  for (var shop in fruitList.oranges) {
    orangeShops.push(fruitList.oranges[shop].shop);
  }

  return (orangeShops);

}
