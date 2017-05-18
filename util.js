
module.exports = {
  findSeven: function (wordArray) {
    var sevenWords = wordArray.filter(function(x){ return x.length === 7});
    return sevenWords;
  },
  findShortest: function (wordArray) {
    var shortestWords = wordArray.filter(function(x){ return x.length === wordArray[0].lenght});
    return shortestWords;
  },
  stringOK: function (str) {
    if ((typeof(str) === 'string') && (/^[a-z]+$/i.test(str)) && str.length <= 7 ) {
      return [true];
    } else {
      return [false, ("You entered '" + str + "'. Either this is not a string or the string you entered contain characters other than letters a-z, or the string has more then 7 characters.")];
    }
  },
  arrayOK: function (arr) {
    if (!Array.isArray(arr)) {
      return false;
    } else {
      for (var i = 0; i < arr.length; i++) {
        if (!this.stringOK(arr[i])) {
          return false;
        }
      }
    };
    return true;
  },
  random: function (arr) {
    return arr[Math.floor((Math.random()*arr.length))];
  },
  sum: function (arr) {
    return arr.reduce(function (a, b) { return a + b;} ,0);
  },
  values: function (obj) {
    var keyArray = Object.keys(obj);
    var vals = [];
    for (var ind = 0; ind < keyArray.length; ind++) {
      vals.push(obj[keyArray[ind]])
    };
    return vals;
  }

};
