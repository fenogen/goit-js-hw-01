// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

'use strict'; 

let message;
let price;
const Chin = 'китай';
const Chil = 'чили';
const Aust = 'австралия';
const Ind = 'индия';
const Yam = 'ямайка';
// const normMassege = message.toLowerCase()    - -- - - Не получается присвоитть!

message = prompt('Укажите страну доставки');
if (message === null) {
    console.log('Отмена')
}

else if (message.toLowerCase() === Chin || message.toLowerCase() === Chil ||
message.toLowerCase() === Aust || message.toLowerCase() === Ind || message.toLowerCase() === Yam){
    
    switch (message.toLowerCase()) {
        case Chin:
            price = '100';
            message = Chin; // ------  не понятно как сделать заглавную большую, можно только регистр
            break;
        case Chil:
            price = '250';
            break;
        case Aust:
            price = '170';
            break;
        case Ind:
            price = '80';
            break;
        case Yam:
            price = '120';
            break;
        default:
            price = "Error";
            break;
        
    }
    console.log(`Доставка в ${message} будет стоить ${price} кредитов`);
}
 else {
alert('В вашей стране доставка не доступна');
}


