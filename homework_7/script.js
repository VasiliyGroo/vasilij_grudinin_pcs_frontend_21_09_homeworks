const firstNum = prompt('Введите первое число');
const signMath = prompt('Введите арифметический знак (+, -, /, *)');
const secondNum = prompt('Введите второе число');

if (!firstNum) {
    console.log('Первое число не указано');
} else if (!signMath) {
    console.log('Не введён знак');
} else if (!secondNum) {
    console.log('Второе число не указано');
} else if (firstNum || secondNum) {
    if (isNaN(firstNum) || isNaN(secondNum)) {
        console.log('Некорректный ввод чисел');
    } else {
        switch (signMath) {
            case '+':
                console.log(firstNum, signMath, secondNum, '=', Number(firstNum) + Number(secondNum));
                break;
            case '-':
                console.log(firstNum, signMath, secondNum, '=', Number(firstNum) - Number(secondNum));
                break;
            case '*':
                console.log(firstNum, signMath, secondNum, '=', Number(firstNum) * Number(secondNum));
                break;
            case '/':
                console.log(firstNum, signMath, secondNum, '=', Number(firstNum) / Number(secondNum));
                break;
            default:
                {
                    console.log('Программа не поддерживает такую операцию');
                }
        }
    }
}
