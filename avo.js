function getPrice(dealString) {
  var numbers = dealString.split(' for R');
  return price = (numbers[1] / numbers[0]).toFixed(2);
}

function whichDeal(string) {

  var dealList = string.split(', ');
  var dealMap = {};
  for (i = 0; i < dealList.length; i++) {
    var dealString = dealList[i];
    dealMap[getPrice(dealString)] = dealString;
  }
  return dealMap;
}

exports.array = function(dealMap) {

  var avoArray = [];

  for (var key in dealMap) {
    avoArray.push(dealMap[key]);
  }

  return (avoArray);
}

exports.price = function(dealMap) {

  var priceArray = [];

  for (var price in dealMap) {
    priceArray.push(Number(price));
  }

  return (priceArray);
}

exports.cheapDeal = function(priceArray, dealMap) {

  var cheapPrice = Math.min.apply(null, priceArray);
  var cheapDeal = dealMap[cheapPrice];

  return cheapDeal;

}

exports.expDeal = function(priceArray, dealMap) {

  var expPrice = Math.max.apply(null, priceArray);
  var expDeal = dealMap[expPrice];

  return expDeal;

}

exports.avgPrice = function(priceArray) {

    var totalPrice = priceArray.reduce(function(total, number) {
        return total + number;
      });

      var averagePrice = (totalPrice / priceArray.length).toFixed(2);
      return averagePrice;
}
