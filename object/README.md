# Object
### 객체와 반복문

    var arr = ['a','b','c'];
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    for(key in arr) {
        console.log('key:' + key + ' value:' + arr[key]);
    }

    var names = {
        'firstName': 111,
        'secondName': 222,
        'thirdName': 333
    };
    for(name in names){
        document.write('<li>' + 'name:' + name + ' value:' + names[name] +'</li>');
    }

### 객체 지향 프로그래밍
연관된 데이터와 함수를 그룹핑 하는 방식이라고. 맞나? ㅡ.ㅡa

    var test = {
        'one': {'ego': 90, 'grut': 80},
        'two': function(){
            for(var name in this.one) {
                console.log(name, this.one[name]);
            }
        }
    };
    test.two();
