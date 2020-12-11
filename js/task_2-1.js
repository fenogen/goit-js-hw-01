

'use strict'; 

const total = 130; // 100 20 80 130
const ordered = 50;

console.log(ordered <= total);

if (ordered <= total) {
    console.log('Заказ оформлен, с вами свяжется менеджер')
 }

if (ordered > total) {
  console.log('На складе недостаточно товаров')
}
