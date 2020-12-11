
let input;
let total = 0;

input = prompt('Введите целое число');

while (input !== null) {
  if (isNaN(input)) {
    alert("You wrote not a number");
    total = 0;                              //---------> обнуляет сумму при некорректном вводе числа
  } else {
   
    total += Number(input);
  }
  input = prompt('Введите целое число');
  
}

console.log(`Общая сумма ${total}`);
