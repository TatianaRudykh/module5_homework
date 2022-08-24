//Задание 1 (здесь я не поняла, нужна помощь)

/*
let a = prompt('Введите значение')

let b = +a

console.log(typeof b);

if (b%2 === 0) {
	console.log("Число четное")
}
else if (b%2 === 1) {
	console.log("Число нечетное")
}

else if (b === String) {
	console.log("Упс, кажется, вы ошиблись")
}
*/

//Задание 2

/*
let x

if (x === number) {
console.log("х = числу")
} 
else if (x === string) {
console.log("х = строке")
}

else if (x === boolean) {
console.log("х = логическому типу")
}

else {
	console.log("Тип x не определён")
	}
	*/

	// Задание 3

	/*
	let str = "hello"

	let arr = str.split("")
	arr.reverse();
	let newStr = arr.join(''); 
    console.log( newStr);
	*/

		// Задание 4
	
		/*
		function getRandomInt(0, 100) {
			min = Math.ceil(0);
			max = Math.floor(100);
			return Math.floor(Math.random() * (100 - 0)) + 0; 
		}
		*/

	// Задание 5

	/*
	let mass = [1, 45, 78, 345, 908, 21, 54, 77]

	console.log(mass.length)
	let index;
	for (index = 0; index < mass.length; ++index) {
		console.log(mass[index]);
	}
	*/

	// Задание 6

/*
	let mass = [1, 45, 78, 345, 908, 21, 54, 77]
 
  function foo(a) {
	for (let b = 0; b < a.length; b++)
	  if (a[b] !== a[0]) return !1;
	return !0
  };
 
  console.log([foo(mass)]);
	*/

	// Задание 7

	/*
	let mass = [1, 45, 78, 345, 908, 21, 54, 77, 0]

	console.log(mass.filter((e,i)=>i%2===1)) //нечетные элементы массива

	console.log(mass.filter((e,i)=>i%2===0)) //четные элементы массива (просто хотела попробовать)

	//а это как надо по заданию))): количество четных и нечетных элементов массива

	odd = mass.reduce(function (r, a) { return r + a % 2; }, 0),
    even = mass.length - odd;

	console.log('Нечетных элементов', odd);
	console.log('Четных элементов', even);

	*/

	//Задание 8

	/*
  let myMap = new Map();
  myMap.set('1', 'crop')
  myMap.set(true, 'crop2')
  myMap.set(123, false)
  myMap.set(null, 'line')
  myMap.set('123', 456)
	
  console.log(myMap)
/*



