# Obeject Oriented Programming(OOP)

### 부품화
> 기능별로 로직을 묶어(메소드 별) 분리한다.

### 은닉화, 캡슐화
> 그런데 부품화라고 하는 목표는 단순히 동일한 기능을 하는 메소드와 변수를 그룹핑한다고 달성되는 것은 아니다. 제대로된 부품이라면 그것이 어떻게 만들어졌는지 모르는 사람도 그 부품을 사용하는 방법만 알면 쓸 수 있어야 한다. 이를테면 모니터가 어떻게 동작하는지 몰라도 컴퓨터와 모니터를 연결하는 방법만 알면 화면을 표시 할 수 있는 것과 같은 이치다. 즉 내부의 동작 방법을 단단한 케이스 안으로 숨기고 사용자에게는 그 부품의 사용방법만을 노출하고 있는 것이다. 이러한 컨셉을 정보의 은닉화(Information Hiding), 또는 캡슐화(Encapsulation)라고 부른다. 자연스럽게 사용자에게는 그 부품을 사용하는 방법이 중요한 것이 된다.

### 인터페이스
> 잘 만들어진 부품이라면 부품과 부품을 서로 교환 할 수 있어야 한다. 예를들어보자. 집에 있는 컴퓨터에 A사의 모니터를 연결하다가 B사의 모니터를 연결 할 수 있다. 또 집에 있던 모니터에 A사의 컴퓨터를 연결해서 사용하다가 새로운 컴퓨터를 구입하면서 B사의 컴퓨터를 연결 할 수 있다. 모니터와 컴퓨터는 서로가 교환관계에 있는 것이다. 이것은 모니터와 컴퓨터를 연결하는 케이블의 규격이 표준화 되어 있기 때문에 가능한 일이다.

## 생성자와 new

#### 객체란 서로 연관된 변수와 함수를 그룹핑한 그릇이라고 할 수 있다. 객체 내의 변수의 프로퍼티(property, 속성) 함수를 메소드(method)라고 부른다.
    var person = {};
    person.name = 'egoing';
    person.introduce = function() {
        return 'My name is' + this.name;
    }

### 생성자
생성자(constructor)는 객체를 만드는 역할을 하는 함수다. 자바스크립트에서 함수는 재사용 가능한 로직의 묶음이 아니라 객체를 만드는 참조자라고 할 수 있다.

    function person() {};
    var p = person();
    p; //undefined
    var p = new person();
    p; //person{}

    p.name = 'clair';
    p.introduce = function() {
        return 'My name is' + this.name;
    }
    console.log(p.introduce());

    // 코드 재사용
    function Person_mdf(name) {// 초기화
        this.name = name;
        this.introduce = function() {
            return 'My name is ' + this.name + '!<br/>'
        }
    }
    var person_1 = new Person_mdf('clair bang'),
        person_2 = new Person_mdf('clair bang2');
    console.log(person_1.introduce());
    console.log(person_2.introduce());

## 전역객체
특수한 객체. 모든 객체는 이 전역객체의 프로퍼티다.

전역객체 API [https://opentutorials.org/course/50/44] : Global 하위 메뉴 참고

## this
this는 함수 내에서 함수 호출 맥락(context)를 의미한다. 맥락이라는 것은 상황에 따라서 달라진다는 의미인데 즉 함수를 어떻게 호출하냐에 따라서 this가 가리키는 대상이 달라진다는 뜻이다. 함수와 객체의 관계가 느슨한 자바스크립트에서 this는 이 둘을 연결시켜주는 실질적인 연결점의 역할을 한다.

#### 메소드의 호출
객체의 소속인 메소드의 this는 그 객체를 가르킨다.

#### 생성자와 THIS
생성자로 사용된 this값은 생성된 객체를 가르키며 함수에서 사용되면 함수의 this값은 window.
    var functhis = null;
    function Func() {
        functhis = this;
    }
    var o = Func();
    if(functhis === window) {
        document.write("functhis is window<br/><br/>")
    }

    var o2 = new Func();
    if(functhis === o2) {
        document.write("functhis is o2<br/><br/>")
    }

#### 객체로서 함수
자바스크립트가 얼마나 위험한 언어인가를 보여주는 예제 [apply, call]
>apply

var p = {},
    o = {};

function func() {
    switch(this){
        case p:
            document.write("this p<br/><br/>");
            break;
        case o:
            document.write("this o<br/><br/>");
            break;
        case window:
            document.write("this window<br/><br/>");
            break;
    };
}
func();
func.apply(o);
func.apply(p);
