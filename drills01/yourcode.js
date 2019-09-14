
function sumArray(array) {
  var numbersArray = array;
  var sum = 0;
  for (var i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  return sum;
}

function fitWithinVal(array, value){
  var numbersArray = array;
  var sumArray = [];
  var sum = 0;
  for (var i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
    if (sum <= value) {
      sumArray.push(numbersArray[i]);
    } else {
      sum -= numbersArray[i];
    }
  }
  return sumArray;
}

function getAllNamesShorterThan(array, value){
  var shortNamesArray = [];
  for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
        if (array[arrayIndex].length < value) {
          shortNamesArray.push(array[arrayIndex]);
        }
      }
  return shortNamesArray;
    }

function makeLabel(person){
  return (person.greeting + " " + person.givenName + " " + person.familyName + "\n" +
    person['home address'].streetNumber + " " + person['home address'].streetName + "\n" +
    person['home address'].city + ", " + person['home address'].state + " " + person["home address"].zip);
}
