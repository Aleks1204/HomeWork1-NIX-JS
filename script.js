//Задание No1. Переменные

let admin;
let name;
name = "Aleksey";
admin = name;

alert(admin);
///////////////////////////////////////////////


//Задание No2. Константы
// Есть следующий код:

// const birthday = '18.04.1982';

// const age = someCode(birthday);

// const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы? ->  ответ: ДА
// const AGE = someCode(BIRTHDAY); // а здесь? -> ответ: Не стоит, потому что в в функцию передан аргумент, 
// а он может изменяться, к примеру someCode(HOLIDAY);


//Задание No3. Строки
// Что выведет этот скрипт:
// 5. let name = "Ilya";
// 6. alert( `hello ${1}` ); // hello 1
// 7. alert( `hello ${"name"}` ); // hello name
// 8. alert( `hello ${name}` ); // hello Ilya
////////////////////////////////////////////////////////

//Задание No4. Преобразования типов
// Задание No4. Преобразования типов
// Какой результат будет у выражений ниже?
"" + 1 + 0       // мой ответ: 10, правильный ответ: 10
"" - 1 + 0       // мой ответ: -1, правильный ответ: -1
true + false     // мой ответ: 1, правильный ответ: true
6 / "3"          // мой ответ: 2, правильный ответ: 2
"2" * "3"         // мой ответ: 6 , правильный ответ: 6
4 + 5 + "px"      // мой ответ: 45px, правильный ответ: 9px
"$" + 4 + 5       // мой ответ: S45 , правильный ответ: S45
"4" - 2           // мой ответ: 2, правильный ответ: 2
"4px" - 2         // мой ответ: undefined, правильный ответ: NaN
7 / 0             // мой ответ: infinity, правильный ответ: Infinity
" -9 " + 5        // мой ответ: -95, правильный ответ: -9 5
" -9 " - 5        // мой ответ: -4, правильный ответ: -14 - слабые знания элементарной математики)))
null + 1          // мой ответ: 1, правильный ответ: 1
undefined + 1     // мой ответ: 1, правильный ответ: NaN
////////////////////////////////////////////////////////////////

// //Задание No5. Постфиксная и префиксная формы
// //Чему будут равны переменные a, b, c и d в примере ниже?

// let a = 1, b = 1;
// let c = ++a; // мой ответ: 2, правильный ответ: 2
// let d = b++; // мой ответ: 1, правильный ответ: 1
// ///////////////////////////////////////////////////////////////

// // Задание No6. Результат присваивания
// // Чему будут равны переменные a и x в примере ниже?

// let a = 2;
// let x = 1 + (a *= 2); // мой ответ: 5, правильный ответ: 5
// //////////////////////////////////////////////////////////////

// Задание No7. Операторы сравнения
// Каким будет результат этих выражений?
5 > 4                 //мой ответ: 1, правильный ответ: true, - думал выводит как в PHP true -> 1
"ананас" > "яблоко"   // мой ответ: false, правильный ответ: false
"2" > "12"            // мой ответ: false, правильный ответ: true -> не приводит строки к числу, а сравнивает их побитно
undefined == null     // мой ответ: true, правильный ответ: true
undefined === null    // мой ответ: false, правильный ответ: false -> строгое сравнение!
null == "\n0\n"       // мой ответ: false, правильный ответ: false -> просто угадал)))
null === +"\n0\n"     // мой ответ: false, правильный ответ: false -> просто угадал)))

//Задание No8. Операторы взаимодействия
 //Создайте страницу, которая спрашивает имя у пользователя и выводит его.
 
let getName = prompt("введите ваше имя");
let showName = document.querySelector('#name');
if(getName == ""){
     showName.innerHTML += "Стесняшка)))"
}else{
    showName.innerHTML += getName;
}


// Задание №9. Условные операторы
// Выведется ли alert?
// if ("0") {
// alert( 'Привет' ); // да, выведется, сторока "0" не пустая, а значит true
// }

// Задание №10. Условные операторы
// Используя конструкцию if..else, напишите код, который будет спрашивать: „Каково
// «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае –
// отобразить: «Не знаете? ECMAScript!»

butt = function() {
    let val = document.querySelector('#lang').value;
    let str = document.querySelector('#str');
    if(val.toUpperCase() == "ECMASCRIPT"){
        str.innerHTML = "Верно!";
    }else{
        str.innerHTML = "Не знаете? ECMAScript!";
    }
    
};

//Задание №11. Покажите знак числа
// Используя конструкцию if..else, напишите код, который получает число через prompt, а
// затем выводит в alert:

// let number = prompt("введите число");
// if(number > 0){
// alert(1)
// }else if(number< 0) {
//     alert(-1)
// } else {
//     alert(0)
// }

// Задание №12. ИЛИ
// Что выведет код ниже?
// alert( null || 2 || undefined ); мой ответ: 2, правильный ответ: 2

// Задание №13. ИЛИ
// Что выведет код ниже?
// alert( alert(1) || 2 || alert(3) ); мой ответ: 2, правильный ответ: 1, 2

// Задание №14. И
// Что выведет код ниже?
//alert( 1 && null && 2 ); мой ответ: 1, 2, правильный ответ: null 

// Задание №15. И
// Что выведет код ниже?
// alert( alert(1) && alert(2) ); мой ответ: 1, 2, правильный ответ: 1, undefined

// Задание №16.
// Что выведет код ниже?
//alert( null || 2 && 3 || 4 ); мой ответ: 4, правильный ответ: 3


// Задание №17. Проверка значения из диапазона
// Напишите условие if для проверки, что переменная age находится в диапазоне между
// 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.
let age;
if(age >= 14 && age <= 90);
 


// Задание №18. Проверка значения вне диапазона
// Напишите условие if для проверки, что значение переменной age НЕ находится в
// диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого
// оператора.
if(!(age >= 14 && age <= 90));
if (age < 14 || age > 90);


// Задание №19. IfКакие из перечисленных ниже alert выполнятся?
// Какие конкретно значения будут результатами выражений в условиях if(...)?
//if (-1 || 0) alert( 'first' ); // выполнится
//if (-1 && 0) alert( 'second' );
//if (null || -1 && 1) alert( 'third' ); //выполнится

// Задание №20. Проверка логина
// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не
// введено или нажата клавиша Esc – показать «Отменено», в противном случае
// отобразить «Я вас не знаю».

//let input = prompt("Представтесь");

// if (input.toUpperCase() == "ADMIN") {
//    let password = prompt("Пароль?");

// if (password == "Я главный") {
//     alert("Здравствуйте!");
//   } else if (password == null || password == "") {
//     alert("Отменено");
//   } else {
//     alert("Неверный пароль");
//   }

// } else if (input == "" || input == null) {
//   alert("Отменено");
// } else {
//   alert("Я вас не знаю");
// }


// Задание №21. Переписать условия "if" на "switch"
// Перепишите код с использованием одной конструкции switch:
//let a = +prompt('a?', '');
// if (a == 0) {
// alert( 0 );
// }
// if (a == 1) {
// alert( 1 );
// }
// if (a == 2 || a == 3) {
// alert( '2,3' );
// }
 
// switch(a){
//     case 0:
//         alert( 0 );
//         break;
//         case 1:
//             alert( 1 );
//             break;
//             case 2:
//                 case 3:
//                 alert( '2,3' );
//                 break;
//                 default:
//                     alert("число должно быть не более 3")
// }

// Задание №22.
// Дано целое число. Если оно является положительным, то прибавить к нему 1; в
// противном случае не изменять его. Вывести полученное число.
let intNum = 42;
if(intNum > 0){
    document.querySelector("#int-num").innerHTML = ++intNum;
}else{
    document.querySelector("#int-num").innerHTML = intNum;
}


// Задание №23.
// Дано целое число. Если оно является положительным, то прибавить к нему 1; в
// противном случае вычесть из него 2. Вывести полученное число.
let intNum2 = -42;
if(intNum2 > 0){
    document.querySelector("#int-num2").innerHTML = ++intNum2;
}else{
    document.querySelector("#int-num2").innerHTML = intNum2 - 2;
}

// Задание №24.
// Дано целое число. Если оно является положительным, то прибавить к нему 1; если
// отрицательным, то вычесть из него 2; если нулевым, то заменить его на 10. Вывести
// полученное число
let intNum3 = -9;
if(intNum3 > 0){
    document.querySelector("#int-num3").innerHTML = ++intNum3;
}else if(intNum3 < 0){
    document.querySelector("#int-num3").innerHTML = intNum3 - 2;
}else{
    document.querySelector("#int-num3").innerHTML = 10;
}

// Задание №25.
// Даны три целых числа. Найти количество положительных чисел в исходном наборе.
let arr = [1,9,-4];
let newArr = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        newArr.push(arr[i])
    }
}
document.querySelector("#int-num4").innerHTML += newArr.length;

// Задание №26. Даны три целых числа. Найти количество положительных и количество
// отрицательных чисел в исходном наборе.

let newArrPos = [];
let newArrNeg = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        newArrPos.push(arr[i])
    }else if(arr[i] < 0){
        newArrNeg.push(arr[i])
    }
}
document.querySelector("#int-num5").innerHTML += newArrPos.length;
document.querySelector("#int-num6").innerHTML += newArrNeg.length;

// Задание №27.
// Даны два числа. Вывести большее из них.
let int1 = 9;
let int2 = 3;
let maxNumber = document.querySelector("#int-num7")
if(int1 > int2){
    maxNumber.innerHTML = int1
}else if(int2 > int1){
    maxNumber.innerHTML = int2
}else{
    maxNumber.innerHTML =  "Числа равны"
}
// альтернативный вариант))
console.log(Math.max(int1, int2))

 
// Задание №28.
// Даны два числа. Вывести вначале большее, а затем меньшее из них.
let decNumber = document.querySelector("#int-num8")
if(int1 > int2){
    decNumber.innerHTML = int1 +" ; "
    decNumber.innerHTML += int2
}else if(int2 > int1){
    decNumber.innerHTML = int2 +" ; "
    decNumber.innerHTML += int1
}else{
    decNumber.innerHTML =  "Числа равны"
}
// альтернативный вариант))
console.log(Math.max(int1, int2))
console.log(Math.min(int1, int2))

// Задание №29. Даны две переменные вещественного типа: A, B. Перераспределить
// значения данных переменных так, чтобы в A оказалось меньшее из значений, а в B —
// большее. Вывести новые значения переменных A и B.
let A = 8.734;
let B = 8.427;
let C;
if(A > B){
    C = B
    B = A;
    A = C;
}
document.querySelector("#int-num9").innerHTML = A + " < ";
document.querySelector("#int-num9").innerHTML += B;

// Задание №30.
// Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить
// каждой переменной сумму этих значений, а если равны, то присвоить переменным
// нулевые значения. Вывести новые значения переменных A и B.
A = 8;
B = 18;
if(A != B){
    A = B = (A + B);
}else{
    A = B = 0
}
document.querySelector("#int-num10").innerHTML = A;
document.querySelector("#int-num10").innerHTML += B;

// Задание №31.
// Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить
// каждой переменной большее из этих значений, а если равны, то присвоить
// переменным нулевые значения. Вывести новые значения переменных A и B.
let newA = 7;
let newB = 42;
if(newA == newB){
    newA = newB = 0
}else if(newA > newB){
    newA = newB = newA
}else if(newA < newB){
    newA = newB = newB
}
document.querySelector("#int-num11").innerHTML = newA;
document.querySelector("#int-num11").innerHTML += newB;

// Задание №32.
// Даны три числа. Найти наименьшее из них.
let one = 2;
let two = 5;
let three = 42;

let res = Math.min(one, two, three);
document.querySelector("#int-num12").innerHTML = res;

// Задание №33.
// Даны три числа. Найти среднее из них (то есть число, расположенное между
// наименьшим и наибольшим).
let middle = one+two+three - Math.min(one, two, three) - Math.max(one, two, three);
document.querySelector("#int-num13").innerHTML = middle;

// Задание №34.
// Даны три числа. Вывести вначале наименьшее, а затем наибольшее из данных чисел.
let resMax;
let resMin;
if(one < two && one < three){
    resMin = one;
}else if(two < one && two < three){
    resMin = two;
}else if(three < one && three < two){
    resMin = three;
}
document.querySelector("#int-num14").innerHTML = resMin + " < ";

if(one > two && one > three){
    resMax = one;
}else if(two > one && two > three){
    resMax = two;
}else if(three > one && three > two){
    resMax = three;
}
document.querySelector("#int-num14").innerHTML += resMax;

// Задание №35.
// Даны три числа. Найти сумму двух наибольших из них.
let minNumber = Math.min(one, two, three)
let sumMaxNumber = (one + two + three)-minNumber;
document.querySelector("#int-num15").innerHTML = sumMaxNumber;

// Задание №36.
// Даны три целых числа, одно из которых отлично от двух других, равных между собой.
// Определить порядковый номер числа, отличного от остальных.
let finish = document.querySelector("#int-num16")
let n1 = 3;
let n2 = 7;
let n3 = 3;
if(n1 == n2){
   finish.innerHTML += 3
}else if(n1 == n3){
    finish.innerHTML += 2
}else if(n2 == n3){
    finish.innerHTML += 1
}


