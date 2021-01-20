//Question 1
function myReverse(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) { 
    newStr = newStr + str[i];
  }
  return newStr;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  for(let i = 0; i < str.length; i++) {
    for(let j = i + 1; j < str.length + 1; j++) {
        combinations.push(str.slice(i, j));
    }
}
  return combinations;
}

//Question 3
function allCaps(str) {
  let arr = str.split(" ");
  let newStr = "";
  for (let i = 0; i < arr.length; i++) {
    newStr = newStr + arr[i][0].toUpperCase() + arr[i].slice(1) + " ";
  }
  newStr = newStr.slice(0, newStr.length -1);
  return newStr;
}

//Question 4
function myPower(x, n) {
  let newNumber = Math.pow(x, n);
  return newNumber;
}

//Question 5
function getFirstNotRepeating(str) {
  let newArr = [];
  let duplicatesChars = [];
  for (let i = 0; i < str.length; i++) {
    if (newArr.includes(str[i])) {
        duplicatesChars.push(str[i]);
    } else {
        newArr.push(str[i]);
    }  
  }
  for (let j = 0; j < newArr.length; j++) {
    if (!duplicatesChars.includes(newArr[j])) {
      return newArr[j];
    }
  }
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
