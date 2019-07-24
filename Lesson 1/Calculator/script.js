var firstNumber = +prompt("Введите первое число: ");
var operation = prompt("Введите операцию: ");
var secondNumber = +prompt("Введите второе число: ");
switch(operation)
    {
        case "+":
                alert(firstNumber + secondNumber);
                break;
        case "-": 
                alert(firstNumber - secondNumber);
                break;
        case "*":
                alert(firstNumber * secondNumber);
                break;
        case "/":
                alert(firstNumber / secondNumber);
                break;  
        case "%":
                alert(firstNumber % secondNumber);
                break;
        default:
                alert("Неверное значение !");
                break;
    }