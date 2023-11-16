"use strict"
// alert("Я JavaScript!");

// let admin;
// let name;
// name = "Dgon";
// admin = name;
// alert(admin);

// let ourPlanetName = "earh";
// let cbrrentUserName = "Olena"; 
// let name = "Ilya";
// alert( `hello ${1}` ); // ?
// alert( `hello ${"name"}` ); // ?
// alert( `hello ${name}` ); // ?


// let userName = prompt('How old are you?', 28);
// alert(`You are ${userName} years old`);

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b);

// let year = prompt('Какое «официальное» название JavaScript?', '');

// if (year == 'ECMAScript' ) {
//   alert( 'Верно!' );
// } 
// 	else {
//   alert( 'Не знаете? ECMAScript!' );
// }


// let number = prompt('Ride number', '');

// if (number > 0 ) {
// 	alert( '1' );
// } 
// 	else if (number < 0 ){
// 		alert( '-1' );
// }
// 	else {
// 		alert( '0' );
// };


// let number = prompt('Whis here?', '');

// if (number == 'Admin' ) {
// 	let password = prompt('Write password', '');
// 	if (password === 'I maind') {
// 		alert( 'Hello' );
// 	}
// 	else if (password == '') {
// 		alert( 'Cancel' );
// 	}
// 	else if (password == null) {
// 		alert( 'Cancel' );
// 	}
// 	else {
// 		alert('Wrong password');
// 	}
// } 
// 	else if (number == ''){
// 		alert( 'Cancel' );
// }
// 	else if (number == null){
// 		alert( 'Cancel' );
// }
// 	else {
// 		alert( 'Я вас не знаю' );
// 	}


// for (let i = 0; i < 5; i++) {
// 	console.log("value,", i);
// }


// let user = {
// 	name: 'John',
// 	surname: SubmitEvent,
// };
// user.name = 'Pete';
// delete user.name;
// alert(user.name);

// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

// function isEmpty(obj) {
// 	for (let key in obj) {
// 	  return false;
// 	}
// 	return true;
//  }

// let salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130
// };
// let sum = 0;
// for (let key in salaries) {
// 	sum += salaries[key];
// }
// alert(sum);

// let menu = {
// 	width: 200,
// 	height: 300,
// 	title: "My menu"
// };

// function multiplyNumeric(obj) {
// 	for (let key in obj) {
// 		if (typeof obj[key] == 'number') {
// 			obj[key] *= 2;
// 		}
// 	}
// };

// multiplyNumeric(menu);


// let calculator = {
// 	sum() {
// 		return this.a + this.b;
// 	},

// 	mul() {
// 		return this.a * this.b;
// 	},

// 	read() {
// 		this.a = +prompt('a?', 0);
// 		this.b = +prompt('b?', 0);
// 	}
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// alert(document.body.firstElementChild);
// alert(document.body.children[1]);
// alert(document.body.children[1].childNodes[0]);
// alert(document.body.lastElementChild.lastElementChild);
// alert(document.body.children[1].lastElementChild);

// let table = document.body.firstElementChild;

// for (let i = 0; i < table.rows.length; i++) {
//    let row = table.rows[i];
//    row.cells[i].style.backgroundColor = 'green';
// }


// for (let li of document.querySelectorAll('li')) {
	// получаем название из текстового узла
// 	let title = li.firstChild.data;

// 	title = title.trim(); // удаляем лишние пробелы c конца строки

	// считаем количество потомков
// 	let count = li.getElementsByTagName('li').length;

// 	alert(title + ': ' + count);
// }

// let elem = document.querySelector('[data-widget-name]');

// alert(elem.dataset.widgetName);
// alert(elem.getAttribute('data-widget-name'));
