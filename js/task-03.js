const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const logIn = prompt('Введите свой пароль');

if (logIn === null) {
  message = 'Отменено пользователем';
  console.log(message);
} else if (logIn === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
  console.log(message);
} else if (logIn !== null && logIn !== ADMIN_PASSWORD) {
  message = 'Доступ запрещен, неверный пароль!';
  console.log(message);
}

message = 'Конец авторизации';
alert(message);
