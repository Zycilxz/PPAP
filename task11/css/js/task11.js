//myname   我的名字
//address  地址
//age      年龄
//eamil    邮箱

/*
//这是一个输入框
prompt('这是一个输入框');

//alert 弹出警示框 输出的 展示给用户的
alert('弹出警示框');

//console控制台输出，这是给程序员 测试用的
console.log('我是程序员能看到的');

//1.声明一个age的变量
var age;
//2.赋值 把值存入这个变量中
age = 18;
//3.输出结果
console.log(age);

//1.+2.和起来声明并赋值，称为变量的初始化 
var myname = ('这是js');//可以不用括号 数字可以不用引号
console.log(myname);
*/ 




/*
//1.用户输入姓名  存储到一个myname的变量里面 
var myname = prompt('请输入你的名字');
//2. 输出这个用户名
alert(myname);
*/

/*
//1.更新变量
var myname = 'lxz';
console.log(myname);
myname = 'zyy';
console.log(myname);
//2.声明多个变量
// var myname = 'lxz';
// var address = 'gz';
// var age = 27;
// var eamil = '123456@163.com';
var myname = 'lxz',
    address = 'gz',
    age = 27,
    eamil = '123456@163.com';
*/





/*
//3.1声明不赋值
var sex;
console.log(sex);  // undefined
//3.2不声明 不赋值 直接使用某个变量
console.log(tel);  //会出现报错
//3.3 不声明 直接赋值
qq = 110;
console.log(qq);  //会正常出现110，但不建议使用，（会变成全局变量）
*/



//变量的命名规范
//由 字母 数字 下划线 美元符号
//不能以数字开头
//不能事关键字  保留字  例如: var   因为var有特殊意义了  for  while 
//变量名应该有意义
//尊守驼峰命名法第一个单词首字母小写 后面单词首字母大写
//name  虽然不是关键字  不是保留字 但是有些浏览器对其有特殊含义


//1.js是一门编程语言有很强的逻辑性在里面 实现这个要求的思路 先怎么做再怎么做
//2.我们需要一个临时变量帮我们
//3.把apple1给我们的临时变量temp
//4.把apple2给我们的apple1
//5.把临时变量temp里面的值 给我们的apple2