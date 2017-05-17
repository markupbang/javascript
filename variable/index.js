//전역변수 사용하기
var MYAPP = {};
MYAPP.calculator = {
	'left': null,
	'right': null
};
MYAPP.coordinate = {
	'left': null,
	'right': null
};
function sum(){
	return MYAPP.calculator.left + MYAPP.coordinate.left;
}
document.write(sum());

//전역변수, 지역변수
var vscope = 'global';
function fscope(){
    var vscope = 'local';
    alert('함수안 '+vscope);
}
fscope();
alert('함수밖 '+vscope);
