/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var digit = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
  	var ten = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
  	var hundred = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  	var thousand = ["","M","MM","MMM"];

  	var a = thousand[~~(num / 1000)];
  	var b = hundred[~~(num % 1000 / 100)];
  	var c = ten[~~(num % 100 / 10)];
  	var d = digit[num % 10];

  	return a + b + c + d;
};