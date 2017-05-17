var pattern = /a/;
console.log(pattern.exec('abced')); //['a']

var pattern = /a./;
console.log(pattern.exec('abced')); //['ab']

var pattern = /a/;
console.log(pattern.exec('bcdef')); //null
console.log(pattern.test('abcde')); //true
console.log(pattern.test('bcde')); //false

var pattern = /a/;
var str = 'abcde';
console.log(str.match(pattern)); //['a']
str.replace(pattern, 'A'); //"Abcde"


var pattern = /(\w+)\s(\w+)/g; //단어 띄어쓰기 단어
var _pattern = /([A-Z])\w+/g; //대문자로 시작하는 모든 단어
var str = 'my Codding';
console.log(str.match(pattern)); //my Codding
console.log(str.match(_pattern)); // Codding
console.log(str.replace(pattern, '$2 $1')); // Codding my
