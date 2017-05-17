# 함수지향

    var a;
    function a() {}

    a = {
        b: function() {} //key(프로퍼티) value(메소드)
           //객체에 저장되어 있는 함수를 메소드라 부름
    }
### 값으로서의 함수와 콜백
함수는 값이므로 다른 함수의 인자로 전달 될수 있다.

    var increase = function(num) {
        return num + 1;
    };
    var decrease = function(num) {
        return num - 1;
    };
    var cal = function(func, num) {
        return func(num);
    };
    console.log(cal(increase, 10));
-
    var cal = function(mode) {
        var funcs = {
            'plus': function(left, right) {return left + right},
            'minus': function(left, right) {return left - right}
        }
        return funcs[mode];
    }
    console.dir(cal('plus')(4, 2));
    console.log(cal('minus')(4, 2));
-

    var process = [
        function(input) { return input + 10; }, //11
        function(input) { return input * input; }, //121
        function(input) { return input / 2; } //60.5
    ];
    var input = 1;
    for( var i = 0; i < process.length; i++ ) {
        input = process[i](input);
    }
    alert(input);

#### 콜백 함수
아래 예제의 sortfunc는 콜백 함수이다. 기존의 함수의 동작을 재정의 한다.
이것은 자바스크립트의 함수가 값이기 때문에 가능하다.

함수의 앞에 점 무언가 있다면 그건 뭘까? 객체다
    var numbers = [20,10,9,8,7,4,3,1,2];
    var sortfunc = function(a, b) {
        return a - b;
    }
    numbers.sort(sortfunc); // numbers는 객체(배열)이다.

그래서 .sort()는 객체에 속해있는 함수가 되므로 메소드이다.

#### 비동기 콜백과 Ajax

    $.get('url', function(result) {
        console.log(result);
    })

### 클로저(closure)
내부함수가 외부함수의 맥락에 접근할 수 있는 것을 가르킨다.
