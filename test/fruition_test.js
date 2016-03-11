var assert = require('assert');
var fruition = require('../fruition');

describe('fruition', function() {

  it('should return the seller of the cheapest oranges', function() {
    var result = fruition.orangeSellers(fruitSellerList);
    assert.equal(result, 'chockers');
  })

  it('should return the prices and sellers of apples, order ascending by price', function() {
    var result = fruition.appleSellersPricesAsc(fruitSellerList);
    assert.equal(result, [{
      'shopwrong': 2,
      'woolingsworth': 4,
      'kwakspar': 4,
      'chockers': 5
    }]);
  })

  it('should return the prices and sellers of apples, order descending by price', function() {
    var result = fruition.appleSellersPricesDesc(fruitSellerList);
    assert.equal(result, [{
      'chockers': 5,
      'woolingsworth': 4,
      'kwakspar': 4,
      'shopwrong': 2
    }]);
  })

  it('should return the cheapest fruit', function() {
    var result = fruition.cheapestFruit(fruitSellerList);
    assert.equal(result, ['apples','bananas']);
  })

  it('return the seller of the fruit with the lowest price', function() {
    var result = fruition.cheapestFruitSeller(fruitSellerList);
    assert.equal(result, ['chockers','shopwrong']);
  })

  it('return all the shops that sell oranges', function() {
    var result = fruition.orangeSellerList(fruitSellerList);
    assert.equal(result, ['woolingsworth','chockers','pickle pay','kwakspar']);
  })
});
