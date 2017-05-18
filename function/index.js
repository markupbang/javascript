// sort()
var numbers = [20, 2, 4, 5, 1, 7, 10, 12, 3, 6];
var sortfunc = function(a, b) {
    // if(a > b) { return 1; }
    // else if(a < b) { return -1; }
    // else { return 0; }

    return a - b;
    // return b - a //역순 정렬
};

numbers.sort(sortfunc); //sortfunc = 콜백함수
console.log(numbers);

// Ajax
// $.get('url', function(result){
//     console.log(result);
// });

// Closure
var outter = function() {
    var title = 'Coding eveybody';
    return function() {
        console.log(title);
    };
}
var inner = outter();
inner();

// PRIVATE VARIABLE : 정보를 아무나 수정할 수 있는 것을 방지
var factory_movie = function(title) {
    return {
        get_title: function() {
            return title;
        },
        set_title: function(_title) {
            title = _title;
        }
    }
}
var ghost = factory_movie('Ghost');
var matrix = factory_movie('Matrix');

console.log(ghost.get_title());
console.log(matrix.get_title());

ghost.set_title('에일리언');

console.log(ghost.get_title());
console.log(matrix.get_title());

// 클로저의 응용
var arr = [];
// for(var i = 0; i < 5; i++) {
//     arr[i] = function(){
//         return i;
//     };
//     console.log(arr[i]());
// }
// for(var index in arr) {
//     console.log(arr[index]());
// }

for(var i = 0; i < 5; i++) {
    arr[i] = function(){
        return i;
    }
}
for(var index in arr) {
    console.log(arr[index]());
}

// Arguments
var sum = function() {
  _sum = 0;
  for(var i = 0; i < arguments.length; i++) {
    _sum += arguments[i];
  }
  return _sum;
}
console.log('Arguments result : ' + sum(1,2,3,4));

// 매개변수의 수
var argnum = function(arg) {
    console.log('argnum length :' + argnum.length);
    console.log('arguments length :' + arguments.length);
}
argnum();
