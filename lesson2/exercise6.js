/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (использовать switch).*/

//import { addition, subtraction, multiplication, division } from './exercise5.js'


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'addition':
            return addition(arg1, arg2);
        case 'subtraction':
            return subtraction(arg1, arg2);
        case 'multiplication':
            return multiplication(arg1, arg2);
        case 'division':
            return division(arg1, arg2);
    }
}


var res = mathOperation(1, 2, 'division');
alert(res);