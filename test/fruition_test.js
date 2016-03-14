var assert = require('assert');
var fruition = require('../fruition');

describe('fruition', function() {

  it('should return the seller of the cheapest oranges', function() {
    var result = fruition.cheapOrangesSeller({
      apples:
       [ { shop: 'Woolingsworth', price: 4 },
         { shop: 'Chockers', price: 5 },
         { shop: 'Shopwrong', price: 2 },
         { shop: 'Kwakspar', price: 4 } ],
      bananas:
       [ { shop: 'Woolingsworth', price: 3 },
         { shop: 'Chockers', price: 2 },
         { shop: 'Pickle_pay', price: 4 },
         { shop: 'Shopwrong', price: 3 } ],
      oranges:
       [ { shop: 'Woolingsworth', price: 12 },
         { shop: 'Chockers', price: 4 },
         { shop: 'Pickle_pay', price: 7 },
         { shop: 'Kwakspar', price: 9 } ] });
    assert.equal(result, 'Chockers');
  })

  it('should return the prices and sellers of apples, order ascending by price', function() {
    var result = fruition.appleSellersPricesAsc({
      apples:
       [ { shop: 'Woolingsworth', price: 4 },
         { shop: 'Chockers', price: 5 },
         { shop: 'Shopwrong', price: 2 },
         { shop: 'Kwakspar', price: 4 } ],
      bananas:
       [ { shop: 'Woolingsworth', price: 3 },
         { shop: 'Chockers', price: 2 },
         { shop: 'Pickle_pay', price: 4 },
         { shop: 'Shopwrong', price: 3 } ],
      oranges:
       [ { shop: 'Woolingsworth', price: 12 },
         { shop: 'Chockers', price: 4 },
         { shop: 'Pickle_pay', price: 7 },
         { shop: 'Kwakspar', price: 9 } ] });

    assert.deepEqual(result, [ { shop: 'Shopwrong', price: 2 },
                           { shop: 'Woolingsworth', price: 4 },
                           { shop: 'Kwakspar', price: 4 },
                           { shop: 'Chockers', price: 5 } ]);
  })

  it('should return the prices and sellers of apples, order descending by price', function() {
    var result = fruition.appleSellersPricesDesc({
      apples:
       [ { shop: 'Woolingsworth', price: 4 },
         { shop: 'Chockers', price: 5 },
         { shop: 'Shopwrong', price: 2 },
         { shop: 'Kwakspar', price: 4 } ],
      bananas:
       [ { shop: 'Woolingsworth', price: 3 },
         { shop: 'Chockers', price: 2 },
         { shop: 'Pickle_pay', price: 4 },
         { shop: 'Shopwrong', price: 3 } ],
      oranges:
       [ { shop: 'Woolingsworth', price: 12 },
         { shop: 'Chockers', price: 4 },
         { shop: 'Pickle_pay', price: 7 },
         { shop: 'Kwakspar', price: 9 } ] });

    assert.deepEqual(result, [ { shop: 'Chockers', price: 5 },
                               { shop: 'Woolingsworth', price: 4 },
                               { shop: 'Kwakspar', price: 4 },
                               { shop: 'Shopwrong', price: 2 } ]);
  })

  it('should return the cheapest fruit', function() {
    var result = fruition.cheapestFruit({
      apples:
       [ { shop: 'Woolingsworth', price: 4 },
         { shop: 'Chockers', price: 5 },
         { shop: 'Shopwrong', price: 2 },
         { shop: 'Kwakspar', price: 4 } ],
      bananas:
       [ { shop: 'Woolingsworth', price: 3 },
         { shop: 'Chockers', price: 2 },
         { shop: 'Pickle_pay', price: 4 },
         { shop: 'Shopwrong', price: 3 } ],
      oranges:
       [ { shop: 'Woolingsworth', price: 12 },
         { shop: 'Chockers', price: 4 },
         { shop: 'Pickle_pay', price: 7 },
         { shop: 'Kwakspar', price: 9 } ] }, 2);
    assert.deepEqual(result, ['apples', 'bananas']);
  })

  it('return the seller of the fruit with the lowest price', function() {
    var result = fruition.cheapestFruitsSeller({
      apples:
       [ { shop: 'Woolingsworth', price: 4 },
         { shop: 'Chockers', price: 5 },
         { shop: 'Shopwrong', price: 2 },
         { shop: 'Kwakspar', price: 4 } ],
      bananas:
       [ { shop: 'Woolingsworth', price: 3 },
         { shop: 'Chockers', price: 2 },
         { shop: 'Pickle_pay', price: 4 },
         { shop: 'Shopwrong', price: 3 } ],
      oranges:
       [ { shop: 'Woolingsworth', price: 12 },
         { shop: 'Chockers', price: 4 },
         { shop: 'Pickle_pay', price: 7 },
         { shop: 'Kwakspar', price: 9 } ] }, 2);
    assert.deepEqual(result, ['Shopwrong', 'Chockers']);
  })

  it('return all the shops that sell oranges', function() {
    var result = fruition.orangeSellerList({
      apples:
       [ { shop: 'Woolingsworth', price: 4 },
         { shop: 'Chockers', price: 5 },
         { shop: 'Shopwrong', price: 2 },
         { shop: 'Kwakspar', price: 4 } ],
      bananas:
       [ { shop: 'Woolingsworth', price: 3 },
         { shop: 'Chockers', price: 2 },
         { shop: 'Pickle_pay', price: 4 },
         { shop: 'Shopwrong', price: 3 } ],
      oranges:
       [ { shop: 'Woolingsworth', price: 12 },
         { shop: 'Chockers', price: 4 },
         { shop: 'Pickle_pay', price: 7 },
         { shop: 'Kwakspar', price: 9 } ] });
    assert.deepEqual(result,[ 'Woolingsworth', 'Chockers', 'Pickle_pay', 'Kwakspar' ]);
  })
});
