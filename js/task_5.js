

'use strict'; 

let message;
let price;
const Chin = 'китай';
const Chil = 'чили';
const Aust = 'австралия';
const Ind = 'индия';
const Yam = 'ямайка';

message = prompt(`Укажите страну доставки: ${Chin}, ${Chil}, ${Aust}, ${Ind}, ${Yam}`);

if (message === null) {
    alert('Отменено пользователем!')
}

else {
    let normMessage = message.toLowerCase();
    
    let newS = message.charAt(0).toUpperCase() + message.slice(1).toLowerCase();   //-------> Сделали первую букву страны "большой" при выводе

    switch (normMessage) {
        case Chin:
            price = '100';
            message = Chin;
            alert(`Доставка в ${newS} будет стоить ${price} кредитов`);
            break;
        case Chil:
            price = '250';
            alert(`Доставка в ${newS} будет стоить ${price} кредитов`);
            break;
        case Aust:
            price = '170';
            alert(`Доставка в ${newS} будет стоить ${price} кредитов`);
            break;
        case Ind:
            price = '80';
            alert(`Доставка в ${newS} будет стоить ${price} кредитов`);
            break;
        case Yam:
            price = '120';
            alert(`Доставка в ${newS} будет стоить ${price} кредитов`);
            break;
        default:
            alert('В вашей стране доставка не доступна');
            break;
    }

    // console.log(`Доставка в ${newS} будет стоить ${price} кредитов`);    //-------> будет выводить даже если введено не корректное название
}




