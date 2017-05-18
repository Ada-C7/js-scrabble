var fs = require('fs');

var contents = [];
var a = fs.readFileSync('CSV/AWords.csv', 'utf8');
var b = fs.readFileSync('CSV/BWords.csv', 'utf8');
var c = fs.readFileSync('CSV/CWords.csv', 'utf8');
var d = fs.readFileSync('CSV/DWords.csv', 'utf8');
var e = fs.readFileSync('CSV/EWords.csv', 'utf8');
var f = fs.readFileSync('CSV/FWords.csv', 'utf8');
var g = fs.readFileSync('CSV/GWords.csv', 'utf8');
var h = fs.readFileSync('CSV/HWords.csv', 'utf8');
var i = fs.readFileSync('CSV/IWords.csv', 'utf8');
var j = fs.readFileSync('CSV/JWords.csv', 'utf8');
var k = fs.readFileSync('CSV/KWords.csv', 'utf8');
var l = fs.readFileSync('CSV/LWords.csv', 'utf8');
var m = fs.readFileSync('CSV/MWords.csv', 'utf8');
var n = fs.readFileSync('CSV/NWords.csv', 'utf8');
var o = fs.readFileSync('CSV/OWords.csv', 'utf8');
var p = fs.readFileSync('CSV/PWords.csv', 'utf8');
var q = fs.readFileSync('CSV/QWords.csv', 'utf8');
var r = fs.readFileSync('CSV/RWords.csv', 'utf8');
var s = fs.readFileSync('CSV/SWords.csv', 'utf8');
var t = fs.readFileSync('CSV/TWords.csv', 'utf8');
var u = fs.readFileSync('CSV/UWords.csv', 'utf8');
var v = fs.readFileSync('CSV/VWords.csv', 'utf8');
var w = fs.readFileSync('CSV/WWords.csv', 'utf8');
var x = fs.readFileSync('CSV/XWords.csv', 'utf8');
var y = fs.readFileSync('CSV/YWords.csv', 'utf8');
var z = fs.readFileSync('CSV/ZWords.csv', 'utf8');


var words = a.concat(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z);

console.log(words.length);

console.log(words.includes("askdjh"));
