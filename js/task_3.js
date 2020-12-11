
'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

do {
    message = prompt('Введите пароль администратора');
    if (message === ADMIN_PASSWORD) {
        message = 'Добро пожаловать!';
        break;
    }

    if (message === null) {
        message = 'Отменено пользователем!';
        break;
    } else {
        message = 'Доступ запрещен, неверный пароль!';
        break;
    }
} while (true);

alert(message);

