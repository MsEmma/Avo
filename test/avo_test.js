var assert = require('assert');
var avo = require('../avo');

describe('avo', function() {
  it('should return an array when avo.array is called', function() {
    var result = avo.array({
      '3': '1 for R3',
      '3.5': '2 for R7',
      '3.33': '3 for R10',
      '2.9': '5 for R14.50'
    });
    assert.deepEqual(result, ['1 for R3','2 for R7','3 for R10','5 for R14.50']);
  })

  it('should return Price Per Avo when avo.price is called', function() {
    var result = avo.price({
      '3': '1 for R3',
      '3.5': '2 for R7',
      '3.33': '3 for R10',
      '2.9': '5 for R14.50'
    });
    assert.deepEqual(result, [3, 3.5, 3.33, 2.9]);
  })

  it('should return cheapest deal when avo.cheapDeal is called', function() {
    var result = avo.cheapDeal([3, 3.5, 3.33, 2.9],{
      '3': '1 for R3',
      '3.5': '2 for R7',
      '3.33': '3 for R10',
      '2.9': '5 for R14.50'
    });
    assert.equal(result, '5 for R14.50');
  })

  it('should return expensive deal when avo.expDeal is called', function() {
    var result = avo.expDeal([3, 3.5, 3.33, 2.9], {
      '3': '1 for R3',
      '3.5': '2 for R7',
      '3.33': '3 for R10',
      '2.9': '5 for R14.50'
    });
    assert.equal(result, "2 for R7");
  })

  it('should return average price of all deals when avo.avgPrice is called', function() {
    var result = avo.avgPrice([3, 3.5, 3.33, 2.9]);
    assert.equal(result, 3.18);
  })
})
