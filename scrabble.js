var Scrabble = function() {};



Scrabble.score = function(word) {
  var total = 0;
  var letterValue = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10};

    word = word.toUpperCase();
    for (var i = 0; i < word.length; i++){
      score = letterValue[word[i]]
      total += score;
    }
    return total;
  };

  Scrabble.highestScore = function(arrayofWords){
    var self = this;
    var scores = arrayOfWords.map(function(word){
      return self.score(word);
    })

    var max_score = Math.max(...scores);

    var top_words = [];
    for (var i = 0; i < arrayOfWords.length; i++ ){
      if (scores[i] == max_score){
        top_words.push(arrayOfWords[i]);
      }
    }

    if (top_words.length == 1){
      return top_words[0];
    } else {
      var lengths = top_words.map(function(word){
        return word.length;
      })
      var max_length = Math.max(... lengths);
      var min_length = Math.min(...lengths);
      if (max_length >= 7){
        var tieBreak = min_length;
      };
      var index = lengths.indexOf(tieBreak);
      return top_words[index];
    };
  };

   module.exports = Scrabble;
















    var char = this.word.split("");

    // console.log(char);

    for (var key in letterValue){
      var value = letterValue[key];
    }


    for (var i = 0; i < char.length; i++) {
      if (char[i] == key) {
        wordScore += value;
        return wordScore

      }
      console.log(wordScore);
      console.log(letterValue[key]);
    }

    // WORKS
    //   for (var [k, v] of Object.entries(letterValue)){
    //     // if (char == [k] )
    //       // var wordScore += v
    //       // console.log(wordScore);
    //        console.log(`key is ${k}. Value is ${v}`);
    // }





      // var value = letterValue[key]
      // }




      // if (this.word.length == 8) {
      //   wordScore += 50;
      //   console.log(" word: " + this.word + "  " + "score:" + wordScore);
      // }

      // iterate through char, if instance of lettervalues, add value to wordscore
    }







    var myScrabble = new Scrabble("abc");
    myScrabble.scoreWord();



    // }
    // while(char instanceof letterValue){
    //   wordScore =
    // }
    //
    //   wordScore = this.word.reduce(function(accum, val) {return accum + letterValue(val);}, 0);
    //   console.log(wordScore);
    // }
    //  letterValue.forEach(function(char){
    //   while (char == letterValue.letter){
    //     wordScore += letterValue.score;
    //   }
    //   return wordScore;
