

'use strict';

const credits = 23580;
const pricePerDroid = 3000;

let totalPrice;
let message;
let balance;
let purchase;

do {
  message = prompt('Сколько дроидов Вы хотите купить в нашем магазине?');
  if (message === null) {
    console.log('Отменено пользователем!');
    break;
  }

  if (message >= 1) {
    message = Number(message);
    totalPrice = message * pricePerDroid;
    balance = credits - totalPrice;
    purchase = totalPrice <= credits ? `Вы купили ${message} дроидов, на счету осталось ${balance} кредитов.` : 'Недостаточно средств на счету!';
    console.log(purchase);
    break;
  } else {
    console.log('Введите целое число');
    break;
  }
} while (true);
