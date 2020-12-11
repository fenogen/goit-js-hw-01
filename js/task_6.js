
let input;
let total = 0;

do {
  input = prompt('Введите целое число');
  if (input === null) {
    alert(`Общая сумма ${total}`);
    break;
  }
  if (input >= 1) {
    input = Number(input);
    total += input;
    console.log(`Общая сумма ${total}`);
    continue;
  } else {
    console.log('Было введено не число, попробуйте еще раз');
    total = 0;                                                     //---------> обнуляет сумму при некорректном вводе числа
    // break;
  }
} while (true);
