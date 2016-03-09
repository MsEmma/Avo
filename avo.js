exports.array = function(string) {

  var tempArray = string.split(' for R').join();
  var temp1Array = tempArray.split(',');
  var avoArray = [];

  for (i = 0; i < temp1Array.length; i++) {
    avoArray.push(Number(temp1Array[i]));
  }

  return (avoArray);
}

exports.price = function(array) {

  priceArray = [];
  for (i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      priceArray.push((array[i] / array[i - 1]).toFixed(2))
    }
  }

  return (priceArray)
}

function whichDeal(price) {

  switch (price) {
    case 3:
      return "1 for R3 deal";
      break;
    case 3.5:
      return "2 for R7 deal";
      break;
    case 3.33:
      return "3 for R10 deal";
      break;
    case 2.9:
      return "5 for R14.50 deal";
      break;
  }
}

exports.cheapDeal = function(array) {

  var price = 0;

  for (i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      price = array[i];
    }
  }

  return (whichDeal(price));

}

exports.expDeal = function(array) {

  var price = 0;

  for (i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      price = array[i];
    }
  }

  return (whichDeal(price));

}

exports.avgPrice = function(array){

  var sum = 0;
  for (i = 0; i < array.length; i++){
    sum += array[i]
  }

  var pricesAvg = (sum/array.length).toFixed(2);

  return pricesAvg;
}
