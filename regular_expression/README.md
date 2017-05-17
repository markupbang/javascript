# 정규표현식
> 추출, Test, 치환

### 정규표현식 리터럴
    //찾고자 하는 정보 저장
    var pattern = /a/;
    var pattern = /a./; //a라는 문자뒤에 어떠한 문자 하나가 와도 됨

### 정규표현식 객체 생성자
    var pattern = new RegExp('a');

> 리터럴과 객체 생성자 두가지 모두 같은 결과를 만들지만 각개 장단점이 있음.

--------------------
## 문자열 메소드 실행
    var pattern = /a/;
    var str = 'abcde';
    str.macth(pattern); //['a']
    str.replace(pattern, 'A'); //"Abcde"

## 옵션
[i] 대소문자 구분하지 않음

    var xi = /a/;
    var oi = /a/i;
    var str = 'Abcde';

    str.match(xi); //null
    str.match(oi); //['A']

[g] 모든 문자를 찾아 리턴해줌

    var xg = /a/;
    var og = /a/g;
    var str = 'abcdea';

    str.match(xg); //['a']
    str.match(og); //['a','a']

>한번에 쓸 수 있음

    var oig = /a/ig;
    var str = 'Abcdea';

    str.match(oig); //['A','a']

## 캡쳐

정규표현식 시각화 [https://regexper.com][regexperlink]
[regexperlink]: https://regexper.com/ "Go site"

정규표현식 빌더 [http://regexr.com][regexrbuild]
[regexrbuild]: http://regexr.com/ "Go site"

    /(\w+)\s(\w+)/g //단어 띄어쓰기 단어
    // () 그룹
    // \w A-Z, a-z, 0-9
    // + 하나 이상
    // \s 공백(띄어쓰기)  
    //([A-Z])\w+ //대문자로 시작하는 모든 단어

#### 캡쳐, 치환

    var pattern = /(\w+)\s(\w+)/g; //단어 띄어쓰기 단어
    var _pattern = /([A-Z])\w+/g; //대문자로 시작하는 모든 단어
    var str = 'my Codding';
    console.log(str.match(pattern)); //my Codding
    console.log(str.match(_pattern)); // Codding
    console.log(str.replace(pattern, '$2 $1')); // Codding my
