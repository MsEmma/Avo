var sellerFruitList = {

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
  },

  "Woolingsworth": {
    "apples": 4,
    "bananas": 3,
    "oranges": 12
  }

};

//function getFruitPriceList(sellerFruitList) {

var fruitPriceList = {};
var orangesPriceList = {};
var applesPriceList = {};
var bananasPriceList = {};

for (var shop in sellerFruitList) {
  for (var fruit in sellerFruitList[shop]) {
    if (fruit === "oranges") {
      orangesPriceList[sellerFruitList[shop][fruit]] = shop;
    } else if (fruit === "apples") {
      applesPriceList[sellerFruitList[shop][fruit]] = shop;
    } else if (fruit === "bananas") {
      bananasPriceList[sellerFruitList[shop][fruit]] = shop;
    }
  }
}

fruitPriceList["oranges"] = orangesPriceList;
fruitPriceList["apples"] = applesPriceList;
fruitPriceList["bananas"] = bananasPriceList;

console.log(applesPriceList);
// }

// fruitPriceList ={ oranges: { '4': 'Chockers', '7': 'Pickle_pay', '9': 'Kwakspar', '12': 'Woolingsworth' },
//   apples: { '2': 'Shopwrong', '4': 'Kwakspar', '4': 'Woolingsworth', '5': 'Chockers' },
//   bananas: { '2': 'Chockers', '3': 'Shopwrong', '3': 'Woolingsworth', '4': 'Pickle_pay' } }

exports.cheapOrangeSeller = function(fruitPriceList) {

  orangesPricesArray = [];

  for (var price in fruitPriceList.oranges) {
    orangesPricesArray.push(Number(price));
  }

  var cheapestPrice = Math.min.apply(null, orangesPricesArray);
  cheapestOrangesSeller = fruitPriceList.oranges[cheapestPrice];

  return cheapestOrangesSeller;
}
