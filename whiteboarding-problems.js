// O(n)
function logBetween(lowNum, highNum) {
  let arr = [];

  for (let i = lowNum; i <= highNum; i++) {
    arr.push(i);
  }
  return arr;
}
console.log("logBetween");
console.log(logBetween(-1, 2));
console.log(logBetween(14, 6));
console.log(logBetween(4, 6));
console.log("--------------------");

// O(n)
function logBetweenStepper(min, max, step) {
  let arr = [];

  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}

console.log("logBetweenStepper");
console.log(logBetweenStepper(5, 9, 1)); // => [5, 6, 7, 8, 9]
console.log(logBetweenStepper(-10, 15, 5)); // => [-10, -5, 0, 5, 10, 15]
console.log("--------------------");

// O(n)
function printReverse(min, max) {
  let arr = [];

  for (let i = max - 1; i > min; i--) {
    arr.push(i);
  }
  return arr;
}

console.log("printReverse");
console.log(printReverse(13, 18)); // => [17, 16, 15, 14]
console.log(printReverse(90, 94)); // => [93, 92, 91]
console.log("--------------------");

// O(n)
function fizzBuzz(max) {
  let arr = [];

  for (let i = 0; i < max; i++) {
    if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
      arr.push(i);
    }
  }
  return arr;
}

console.log("fizzBuzz");
console.log(fizzBuzz(20));
console.log("--------------------");

// O(sqrt(n))
function isPrime(number) {
  for (let i = 2, j = Math.sqrt(number); i <= j; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}

console.log("isPrime");
console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
console.log("--------------------");

// O(n)
function maxValue(array) {
  if (array.length === 0) {
    return null;
  }
  return Math.max(...array);
}

console.log("maxValue");
console.log(maxValue([12, 6, 43, 2])); // => 43
console.log(maxValue([])); // => null
console.log(maxValue([-4, -10, 0.43])); // => 0.43
console.log("--------------------");

// O(n)
function myIndexOf(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log("myIndexOf");
console.log(myIndexOf([1, 2, 3, 4], 4)); // => 3
console.log(myIndexOf([5, 6, 7, 8], 2)); // => -1
console.log("--------------------");

// O(n)
function factorArray(array, number) {
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    if (number % array[i] === 0) {
      arr.push(array[i]);
    }
  }
  return arr;
}

console.log("factorArray");
console.log(factorArray([2, 3, 4, 5, 6], 20)); // => [2,4,5]
console.log(factorArray([2, 3, 4, 5, 6], 35)); // => [5]
console.log(factorArray([10, 15, 20, 25], 5)); // => []
console.log("--------------------");

// O(n / 2) reduces to O(n)
function oddRange(end) {
  let arr = [];

  for (let i = 1; i <= end; i += 2) {
    arr.push(i);
  }
  return arr;
}

console.log("oddRange");
console.log(oddRange(13)); // => [ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6)); // => [ 1, 3, 5 ]
console.log("--------------------");

// O(n)
function reverseHyphenString(string) {
  let arr = string.split("-");
  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr.join("-");
}

console.log("reverseHyphenString");
console.log(reverseHyphenString("Go-to-the-store")); // => "store-the-to-Go"
console.log(reverseHyphenString("Jump,-jump-for-joy")); // => "joy-for-jump-Jump,"
console.log("--------------------");

// O(m * n)
function intersect(arr1, arr2) {
  let arr = arr1.filter((element) => arr2.includes(element));
  return arr;
}

console.log("intersect");
console.log(intersect(["a", "b", "c", "d"], ["b", "d", "e"])); // => [ 'b', 'd' ]
console.log(intersect(["a", "b", "c"], ["x", "y", "z"])); // => []
console.log("--------------------");

// O(n^2) or O(n * 2), spread = O(n) and reverse = O(n)
function mirrorArray(array) {
  let newArr = [...array];

  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}

console.log("mirrorArray");
console.log(mirrorArray([1, 2, 3])); // => [ 1, 2, 3, 3, 2, 1 ]
console.log(mirrorArray(["a", "b", "c", "d"])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
console.log("--------------------");

// Helper function
function removeVowels(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  let newWord = "";

  for (let i = 0; i < word.length; i++) {
    if (!vowels.includes(word[i])) {
      newWord += word[i];
    }
  }
  return newWord;
}

//
function abbreviate(sentence) {
  const vowels = ["a", "e", "i", "o", "u"];
  let words = sentence.split(" ");
  let newWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length > 4) {
      newWords.push(removeVowels(word));
    } else {
      newWords.push(word);
    }
  }
  return newWords.join(" ");
}

console.log("abbreviate");
console.log(abbreviate("the bootcamp is fun")); // => 'the btcmp is fun'
console.log(abbreviate("programming is fantastic")); // => 'prgrmmng is fntstc'
console.log(abbreviate("hello world")); // => 'hll wrld'
console.log(abbreviate("how are you")); // => 'how are you'
console.log("--------------------");

// O(n)
function adults(people) {
  let results = [];

  for (let i = 0; i < people.length; i++) {
    let person = people[i];

    if (person.age >= 18) {
      results.push(person.name);
    }
  }
  return results;
}

let ppl = [
  { name: "John", age: 20 },
  { name: "Jim", age: 13 },
  { name: "Jane", age: 18 },
  { name: "Bob", age: 7 },
];

console.log("adults");
console.log(adults(ppl)); // => [ 'John', 'Jane' ]
console.log("--------------------");

// O(n) I think. for-loop = O(n) + if = O(n). O(n * 2) reduces to O(n)
function countScores(people) {
  let results = {};

  for (let i = 0; i < people.length; i++) {
    let person = people[i];

    if (results[person.name]) {
      results[person.name] += person.score;
    } else {
      results[person.name] = person.score;
    }
  }
  return results;
}

ppl = [
  { name: "Anthony", score: 10 },
  { name: "Fred", score: 10 },
  { name: "Anthony", score: -8 },
  { name: "Winnie", score: 12 },
];

let peeps = [
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 },
];

console.log("countScores");
console.log(countScores(ppl)); // => { Anthony: 2, Fred: 10, Winnie: 12 }
console.log(countScores(peeps)); // => { Anthony: 4, Fred: 4, Winnie: 6 }
console.log("--------------------");

// O(sqrt(n)) + O(n) = Reduces to O(n)?
function firstNPrimes(n) {
  let results = [];

  for (let i = 2; results.length < n; i++) {
    if (isPrime(i)) {
      results.push(i);
    }
  }
  return results;
}

console.log("firstNPrimes");
console.log(firstNPrimes(0)); // => []
console.log(firstNPrimes(1)); // => [2]
console.log(firstNPrimes(4)); // => [2, 3, 5, 7]
console.log("--------------------");

// O(n)
function peakFinder(array) {
  let results = [];

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let prev = array[i - 1];
    let next = array[i + 1];
    let end = array.length - 1;

    if (
      (i === 0 && current > next) ||
      (i === end && current > prev) ||
      (current > prev && current > next)
    ) {
      results.push(i);
    }
  }
  return results;
}

console.log("peakFinder");
console.log(peakFinder([1, 2, 3, 2, 1])); // => [2]
console.log(peakFinder([2, 1, 2, 3, 4, 5])); // => [0, 5]
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); // => [2, 6, 8]
console.log("--------------------");

// O(n^2)
function divisibleByThreePairSum(array) {
  let results = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let pair = array[i] + array[j];

      if (pair % 3 === 0) {
        results.push([i, j]);
      }
    }
  }
  return results;
}

console.log("divisibleByThreePairSum");
let arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
console.log(arr1); // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

let arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
console.log(arr2); // => [[1, 3]]
console.log("--------------------");

// O(n)
function zipArray(arr1, arr2) {
  let results = [];

  for (let i = 0; i < arr1.length; i++) {
    results.push([arr1[i], arr2[i]]);
  }
  return results;
}

console.log("zipArray");
const a1 = ["a", "b", "c", "d"];
const a2 = [10, 20, 30, 40];

const zipped = zipArray(a1, a2);
console.log(zipped); // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
console.log("--------------------");

// O(n) where n is total array elements
function twoDimensionalTotal(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    let sub = array[i];

    for (let j = 0; j < sub.length; j++) {
      let subElement = array[i][j];
      sum += subElement;
    }
  }
  return sum;
}

console.log("twoDimensionalTotal");
arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

console.log(twoDimensionalTotal(arr1)); // => 40

arr2 = [[2], [1, 9], [1, 1, 1]];

console.log(twoDimensionalTotal(arr2)); // => 15
console.log("--------------------");

// O(n) where n is total array elements
function countInnerElement(arr) {
  let results = {};

  for (let i = 0; i < arr.length; i++) {
    let sub = arr[i];

    for (let j = 0; j < sub.length; j++) {
      let subElement = sub[j];

      if (results[subElement] === undefined) {
        results[subElement] = 1;
      } else {
        results[subElement]++;
      }
    }
  }
  return results;
}

console.log("countInnerElement");
arr1 = [
  [1, 2, 4, 5],
  [2, 7, 4],
  [1, 4, 5, 2, 7],
];

console.log(countInnerElement(arr1)); // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

arr2 = [
  ["a", "b", "c", "d"],
  ["a", "b"],
  ["a", "c", "d", "a"],
];

console.log(countInnerElement(arr2)); // => {a: 4, b: 2, c: 2, d: 2}
console.log("--------------------");

// O(n) where n is total array elements
function twoDiff(array) {
  let results = [];

  for (let i = 0; i < array.length; i++) {
    let current = array[i];

    for (let j = i + 1; j < array.length; j++) {
      let next = array[j];

      if (current - next === 2 || current - next === -2) {
        results.push([i, j]);
      }
    }
  }
  return results;
}

console.log("twoDiff");
console.log(twoDiff([2, 3, 4, 6, 1, 7])); // => [[0, 2], [1, 4], [2, 3]]
console.log(twoDiff([0, 2, 4, 3, 5])); // => [[0, 1], [1, 2], [3,4]]
console.log(twoDiff([])); // => []
console.log("--------------------");

// O(m * n)
function arrayDiff(arr1, arr2) {
  let arr = arr1.filter((element) => !arr2.includes(element));
  return arr;
}

console.log("arrayDiff");
let array1 = [1, 23, 2, 43, 3, 4];
let array2 = [3, 23];
console.log(arrayDiff(array1, array2)); // => [1, 2, 43 ,4]

let array3 = ["a", "ab", "c", "d", "c"];
let array4 = ["d"];
console.log(arrayDiff(array3, array4)); // => ['a', 'ab', 'c', 'c']
console.log("--------------------");

// O(n)
function valueCounter(obj, val) {
  let count = 0;

  for (let key in obj) {
    let current = obj[key];

    if (current === val) {
      count++;
    }
  }
  return count;
}

console.log("valueCounter");
const obj1 = { 1: "Anne", 2: "Alvin", 3: "Anne", 4: "Anne" };
console.log(valueCounter(obj1, "Anne")); // => 3

const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 };
console.log(valueCounter(obj2, 88)); // => 0

const pairs = { Anne: "Roman", Alvin: "Roman", JJ: "Anne", Roman: "Anne" };
console.log(valueCounter(pairs, "Roman")); // => 2
console.log("--------------------");

// O(n) where n is total array elements
function elementCount(array) {
  let results = {};

  for (let i = 0; i < array.length; i++) {
    let current = array[i];

    if (results[current] === undefined) {
      results[current] = 1;
    } else {
      results[current]++;
    }
  }
  return results;
}

console.log("elementCount");
console.log(elementCount(["a", "a", "b", "b"])); // => { "a" : 2, "b" : 2 }
console.log(elementCount(["c", "a", "c", "a", "b"])); // => { "c": 2, "a": 2, "b": 1 }
console.log("--------------------");

// O(sqrt(n))
function nextTwoPrimes(num) {
  let results = [];

  for (let i = num + 1; results.length < 2; i++) {
    if (isPrime(i)) {
      results.push(i);
    }
  }
  return results;
}

console.log("nextTwoPrimes");
console.log(nextTwoPrimes(2)); // => [ 3, 5 ]
console.log(nextTwoPrimes(3)); // => [ 5, 7 ]
console.log(nextTwoPrimes(7)); // => [ 11, 13 ]
console.log(nextTwoPrimes(8)); // => [ 11, 13 ]
console.log(nextTwoPrimes(20)); // => [ 23, 29 ]
console.log(nextTwoPrimes(97)); // => [ 101, 103 ]
console.log("--------------------");

// O(n^2)
function pairProduct(arr, num) {
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let pair = arr[i] * arr[j];

      if (pair === num) {
        results.push([i, j]);
      }
    }
  }
  return results;
}

console.log("pairProduct");
console.log(pairProduct([1, 2, 3, 4, 5], 4)); // => [ [ 0, 3 ] ]
console.log(pairProduct([1, 2, 3, 4, 5], 8)); // => [ [ 1, 3 ] ]
console.log(pairProduct([1, 2, 3, 12, 8], 24)); // => [ [ 1, 3 ], [ 2, 4 ] ]
console.log("--------------------");

// O(n) where n is subarrays (not total elements)
function twoDimensionalSize(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    let sub = array[i];
    count += sub.length;
  }
  return count;
}

console.log("twoDimensionalSize");
arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];
console.log(twoDimensionalSize(arr1)); // => 9

arr2 = [["a"], ["b", "c", "d", "e"]];
console.log(twoDimensionalSize(arr2)); // => 5
console.log("--------------------");

// O(n) where n = number of words
function longWordCount(string) {
  let count = 0;
  let words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length > 7) {
      count++;
    }
  }
  return count;
}

console.log("longWordCount");
console.log(longWordCount("")); // => 0
console.log(longWordCount("short words only")); // => 0
console.log(longWordCount("one reallylong word")); // => 1
console.log(longWordCount("two reallylong words inthisstring")); // => 2
console.log(longWordCount("allwordword longwordword wordswordword")); // => 3
console.log(longWordCount("seventy schfifty five")); // => 1
console.log("--------------------");

// O(n)
function factorial(n) {
  let val = 1;

  for (let i = 2; i <= n; i++) {
    val *= i;
  }
  return val;
}

console.log("factorial");
console.log(factorial(1)); // => 1
console.log(factorial(4)); // => 24
console.log(factorial(5)); // => 120
console.log(factorial(10)); // => 3628800
console.log("--------------------");

// O(min(a, b))
function lcm(num1, num2) {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);
  let i = max;

  while (i % min !== 0) {
    i += max;
  }
  return i;
}

console.log("lcm");
console.log(lcm(2, 3)); // => 6
console.log(lcm(6, 10)); // => 30
console.log(lcm(24, 26)); // => 312
console.log("--------------------");

// O(n) where n is number of letters in word
function hipsterfyWord(word) {
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i].toLowerCase())) {
      let newWord = word.slice(0, i) + word.slice(i + 1);

      return newWord;
    }
  }
  return word;
}

console.log("hipsterfyWord");
console.log(hipsterfyWord("proper")); // => 'propr'
console.log(hipsterfyWord("tonic")); // => 'tonc'
console.log(hipsterfyWord("PANTHER")); // => 'PANTHR'
console.log(hipsterfyWord("BACKWARDS")); // => 'BACKWRDS'
console.log("--------------------");

// O(m * n)? m = words, n = letters
function hipsterfy(sentence) {
  let words = sentence.split(" ");
  let newWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = hipsterfyWord(words[i]);
    newWords.push(word);
  }
  return newWords.join(" ");
}

console.log("hipsterfy");
console.log(hipsterfy("proper")); // => "propr"
console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // => "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // => "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries")); // => "turtl cheeseburgr fris"
console.log("--------------------");

//
function objectToString(count) {
  let results = "";

  for (let key in count) {
    for (let i = 0; i < count[key]; i++) {
      results += key;
    }
  }
  return results;
}

console.log("objectToString");
console.log(objectToString({ a: 2, b: 4, c: 1 })); // => 'aabbbbc'
console.log(objectToString({ b: 1, o: 2, t: 1 })); // => 'boot'
console.log("--------------------");

// O(n)
function shortestWord(sentence) {
  let words = sentence.split(" ");
  let shortest = words[0];

  for (let i = 1; i < words.length; i++) {
    let current = words[i];

    if (current.length < shortest.length) {
      shortest = current;
    }
  }
  return shortest;
}

console.log("shortestWord");
console.log(shortestWord("app academy is cool")); // => 'is'
console.log(shortestWord("programming bootcamp")); // => 'bootcamp'
console.log("--------------------");

// O(log(min(num1, num2))
function greatestCommonFactor(num1, num2) {
  while (num1 != num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return num1;
}

console.log("greatestCommonFactor");
console.log(greatestCommonFactor(15, 25)); // => 5
console.log(greatestCommonFactor(16, 24)); // => 8
console.log(greatestCommonFactor(7, 11)); // => 1
console.log("--------------------");

// O(n)
function isPassing(assessments) {
  let total = 0;

  for (let i = 0; i < assessments.length; i++) {
    let current = assessments[i];
    total += current["score"];
  }

  let avg = total / assessments.length;

  if (avg >= 70) {
    return true;
  }
  return false;
}

console.log("isPassing");
const assessments1 = [
  { number: 1, score: 60 },
  { number: 2, score: 90 },
  { number: 3, score: 80 },
  { number: 4, score: 100 },
  { number: 5, score: 85 },
];

console.log(isPassing(assessments1)); // => true

const assessments2 = [
  { number: 1, score: 60 },
  { number: 2, score: 20 },
  { number: 3, score: 45 },
];

console.log(isPassing(assessments2)); // => false
console.log("--------------------");

// O(n)
function valueConcat(array, obj) {
  let results = [];

  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    let value = obj[element];

    if (value) {
      results.push(element + value);
    } else {
      results.push(element);
    }
  }
  return results;
}

console.log("valueConcat");
const arr = ["alex", "maurice", "meagan", "ali"];
const obj = { alex: "bronca", ali: "harris" };
console.log(valueConcat(arr, obj)); // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]
console.log(valueConcat(["a", "b", "c"], { b: 2, c: 3 })); // => [ 'a', 'b2', 'c3' ]
console.log("--------------------");

// O(n)
function threeInARow(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
      return true;
    }
  }
  return false;
}

console.log("threeInARow");
console.log(threeInARow([4, 3, 7, 7, 7, 13, 8])); // => true;
console.log(threeInARow([10, 9, 20, 33, 3, 3])); // => false;
console.log("--------------------");

// O(n) where n = number of words
function variableNameify(words) {
  let results = words[0].toLowerCase();

  for (let i = 1; i < words.length; i++) {
    let word = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    results += word;
  }
  return results;
}

console.log("variableNameify");
console.log(variableNameify(["is", "prime"])); // => 'isPrime'
console.log(variableNameify(["remove", "last", "vowel"])); // => 'removeLastVowel'
console.log(variableNameify(["MaX", "VALUE"])); // => 'maxValue'
console.log("--------------------");

// O(n)
function threeIncreasing(arr) {
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i];
    let second = arr[i + 1];
    let third = arr[i + 2];

    if (second === first + 1 && third === second + 1) {
      return true;
    }
  }
  return false;
}

console.log("threeIncreasing");
console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4])); // => true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6])); // => false
console.log("--------------------");

// O(n) where n = total array elements, or O(n^2) where n = subarrays and subarray elements
function reverse2D(array) {
  let results = "";

  for (let i = array.length - 1; i >= 0; i--) {
    let sub = array[i];

    for (let j = sub.length - 1; j >= 0; j--) {
      let current = sub[j];
      results += current;
    }
  }
  return results;
}

console.log("reverse2D");
arr1 = [
  ["a", "b", "c", "d"],
  ["e", "f"],
  ["g", "h", "i"],
];

console.log(reverse2D(arr1)); // => 'ihgfedcba'

arr2 = [
  ["Julian", "Matt", "Mike"],
  ["Oscar", "Patrick"],
];
console.log(reverse2D(arr2)); // => 'PatrickOscarMikeMattJulian'
console.log("--------------------");

// O(n) in worst case
function reverb(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = word.length - 1; i >= 0; i--) {
    let letter = word[i].toLowerCase();

    if (vowels.includes(letter)) {
      return word + word.slice(i);
    }
  }
  return word;
}

console.log("reverb");
console.log(reverb("running")); // => 'runninging'
console.log(reverb("wild")); // => 'wildild'
console.log(reverb("debugged")); // => 'debuggeded'
console.log(reverb("my")); // => 'my'
console.log("--------------------");

// O(n) reduced from O(2n) - n for all letters, then n for all letters again
function countRepeats(string) {
  let count = 0;
  let letters = {};

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    if (letters[letter] === undefined) {
      letters[letter] = 1;
    } else {
      letters[letter]++;
    }
  }
  for (let key in letters) {
    if (letters[key] > 1) {
      count++;
    }
  }
  return count;
}

console.log("countRepeats");
console.log(countRepeats("calvin")); // => 0
console.log(countRepeats("caaaalvin")); // => 1
console.log(countRepeats("pops")); // => 1
console.log(countRepeats("mississippi")); // => 3
console.log(countRepeats("hellobootcampprep")); // => 4
console.log("--------------------");

// O(n^2)?
function pairsToString(arr) {
  let results = "";

  for (let i = 0; i < arr.length; i++) {
    let pair = arr[i];
    let letter = pair[0];
    let number = pair[1];

    for (let j = 0; j < number; j++) {
      results += letter;
    }
  }
  return results;
}

console.log("pairsToString");

array1 = [
  ["a", 3],
  ["b", 1],
  ["c", 2],
];
console.log(pairsToString(array1)); // => 'aaabcc'

array2 = [
  ["f", 1],
  ["o", 2],
  ["d", 1],
  ["!", 1],
];
console.log(pairsToString(array2)); // => 'food!'
console.log("--------------------");

// O(n)
function countAdjacentSums(arr, n) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] === n) {
      count++;
    }
  }
  return count;
}

console.log("countAdjacentSums");
console.log(countAdjacentSums([1, 5, 1], 6)); // => 2
console.log(countAdjacentSums([7, 2, 4, 6], 7)); // => 0
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)); // => 3
console.log("--------------------");

// O(n)
function signFlipCount(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let first = nums[i];
    let second = nums[i + 1];

    if ((first > 0 && second < 0) || (first < 0 && second > 0)) {
      count++;
    }
  }
  return count;
}

console.log("signFlipCount");
console.log(signFlipCount([5, 6, 10, 3])); // => 0
console.log(signFlipCount([-12, 0, -3, -5])); // => 0
console.log(signFlipCount([-12, 10, -3, -5])); // => 2
console.log(signFlipCount([1, -2, -3, -4])); // => 1
console.log(signFlipCount([-1, 11.3, -3, 100])); // => 3
console.log("--------------------");

// O(n) where n = length
function powerSequence(base, length) {
  let results = [base];

  while (results.length < length) {
    let current = results[results.length - 1];
    let next = current * base;
    results.push(next);
  }
  return results;
}

console.log("powerSequence");
console.log(powerSequence(3, 4)); // => [ 3, 9, 27, 81 ]
console.log(powerSequence(2, 6)); // => [ 2, 4, 8, 16, 32, 64 ]
console.log(powerSequence(8, 3)); // => [ 8, 64, 512 ]
console.log("--------------------");

// O(n)
function collapseString(str) {
  let results = "";

  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    let lastAdded = results[results.length - 1];

    if (current !== lastAdded) {
      results += current;
    }
  }
  return results;
}

console.log("collapseString");
console.log(collapseString("apple")); // => 'aple'
console.log(collapseString("AAAaalviiiiin!!!")); // => 'Aalvin!'
console.log(collapseString("hello   app academy")); // => 'helo ap academy'
console.log("--------------------");

// O(n)
function oddWordsOut(sentence) {
  let words = sentence.split(" ");
  let results = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length % 2 === 0) {
      results.push(word);
    }
  }
  return results.join(" ");
}

console.log("oddWordsOut");
console.log(oddWordsOut("go to the store and buy milk")); // => 'go to milk'
console.log(oddWordsOut("what is the answer")); // => 'what is answer'
console.log("--------------------");

// O(n)
function mindPsAndQs(str) {
  let longest = 0;
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "P" || str[i] === "Q") {
      count++;
      if (count > longest) {
        longest = count;
      }
    } else {
      count = 0;
    }
  }
  return longest;
}

console.log("mindPsAndQs");
console.log(mindPsAndQs("BOOTCAMP")); // => 1
console.log(mindPsAndQs("APCDQQPPC")); // => 4
console.log(mindPsAndQs("PQPQ")); // => 4
console.log(mindPsAndQs("PPPXQPPPQ")); // => 5
console.log("--------------------");

// O(sqrt(min(num1, num2)))
function commonFactors(num1, num2) {
  let results = [];
  let gcf = greatestCommonFactor(num1, num2);

  for (let i = 1; i <= gcf; i++) {
    if (gcf % i === 0) {
      results.push(i);
    }
  }
  return results;
}

console.log("commonFactors");
console.log(commonFactors(12, 50)); // => [ 1, 2 ]
console.log(commonFactors(6, 24)); // => [ 1, 2, 3, 6 ]
console.log(commonFactors(11, 22)); // => [ 1, 11 ]
console.log(commonFactors(45, 60)); // => [ 1, 3, 5, 15 ]
console.log("--------------------");

//  O(log(min(num1, num2)) + sqrt(max(num1, num2)))
function commonPrimeFactors(num1, num2) {
  return commonFactors(num1, num2).filter((num) => isPrime(num));
}

console.log("commonPrimeFactors");
console.log(commonPrimeFactors(12, 50)); // => [ 2 ]
console.log(commonPrimeFactors(6, 24)); // => [ 2, 3 ]
console.log(commonPrimeFactors(11, 22)); // => [ 11 ]
console.log(commonPrimeFactors(45, 60)); // => [ 3, 5 ]
console.log("--------------------");

// O(n)
function splitHalfArray(array) {
  let middle = Math.floor(array.length / 2);
  let first = array.slice(0, middle);
  let even = array.slice(middle);
  let odd = array.slice(middle + 1);
  let results = [first];

  if (array.length % 2 === 0) {
    results.push(even);
  } else {
    results.push(odd);
  }
  return results;
}

console.log("splitHalfArray");
console.log(splitHalfArray([1, 2, 3, 4, 5])); // => [ [ 1, 2 ], [ 4, 5 ] ]
console.log(splitHalfArray(["a", "b", "c", "d", "e", "f"])); // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
console.log("--------------------");

// O(n)
function threeUniqueVowels(string) {
  const VOWELS = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < VOWELS.length; i++) {
    if (string.includes(VOWELS[i])) {
      count++;
    }
  }

  return count > 2;
}

console.log("threeUniqueVowels");
console.log(threeUniqueVowels("delicious")); // => true
console.log(threeUniqueVowels("the bootcamp")); // => true
console.log(threeUniqueVowels("bootcamp")); // => false
console.log(threeUniqueVowels("dog")); // => false
console.log(threeUniqueVowels("go home")); // => false
console.log("--------------------");

// O(n) Pretty long solution, but other ideas aren't shorter
function vowelShift(sentence) {
  const VOWELS = ["a", "e", "i", "o", "u"];
  let results = "";
  let next;

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (VOWELS.includes(letter)) {
      let current = VOWELS.indexOf(letter);
      if (VOWELS[current + 1] === undefined) {
        next = VOWELS[0];
      } else {
        next = VOWELS[current + 1];
      }
      results += next;
    } else {
      results += letter;
    }
  }
  return results;
}

console.log("vowelShift");
console.log(vowelShift("bootcamp")); // => 'buutcemp'
console.log(vowelShift("hello world")); // => 'hillu wurld'
console.log(vowelShift("on the hunt")); // => 'un thi hant'
console.log("--------------------");

// O(n) - yikes, not pretty
function hasSymmetry(array) {
  let middle = Math.floor(array.length / 2);
  let first = array.slice(0, middle);
  let even = array.slice(middle);
  let odd = array.slice(middle + 1);
  let len = first.length;

  if (array.length % 2 === 0) {
    for (let i = 0, j = len - 1; i < len, j >= 0; i++, j--) {
      if (first[i] !== even[j]) {
        return false;
      }
    }
  } else {
    for (let i = 0, j = len - 1; i < len, j >= 0; i++, j--) {
      if (first[i] !== odd[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log('hasSymmetry');
console.log(hasSymmetry([1, 2, 3, 3, 2, 1])); // => true
console.log(hasSymmetry([1, 2, 3, 3, 4, 1])); // => false
console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])); // => true
console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])); // => false
console.log("--------------------");

// Helper function
function findLowerEvens(num) {
    let results = [];
    for (let i = 2; i <= num; i += 2) {
        results.push(i);
    }
    return results;
}

// Helper function
function sumArray(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

// O(n^2) - O(n) for each helper function (2)
function evenSumArray(array) {
    let results = [];

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        let evens = findLowerEvens(num);
        let sum = sumArray(evens);
        results.push(sum);
    }
    return results;
}

console.log('evenSumArray');
console.log(evenSumArray([6, 7, 5])); // => [ 12, 12, 6 ]
console.log(evenSumArray([2, 8, 3, 5])); // => [ 2, 20, 2, 6 ]
console.log("--------------------");

// O(n) where n = numString length
function numsToWords(numString) {
    let newStr = '';
    let words = [
        'Zero', 'One', 'Two', 'Three',
        'Four', 'Five', 'Six',
        'Seven', 'Eight', 'Nine'
    ];

    for (let i = 0; i < numString.length; i++) {
        let num = numString[i];
        let str = words[num];
        newStr += str;
    }
    return newStr;
}

console.log('numsToWords');
console.log(numsToWords('42')); // => 'FourTwo'
console.log(numsToWords('123')); // => 'OneTwoThree'
console.log(numsToWords('159598')); // => 'OneFiveNineFiveNineEight'
console.log("--------------------");

// O(n)
function moreDotLessDash(str) {
    let dots = 0;
    let dashes = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.') {
            dots++;
        }
        else if (str[i] === '-') {
            dashes++;
        }
    }
    return dots > dashes;
}

console.log('moreDotLessDash');
console.log(moreDotLessDash('2-D arrays are fun. I think.'));  // => true
console.log(moreDotLessDash('.-.-.'));  // => true
console.log(moreDotLessDash('.-'));  // => false
console.log(moreDotLessDash('..--'));  // => false
console.log("--------------------");
