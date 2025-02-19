let message;
const ADMAIN_PASSWORD = "YESTERDAY";
let inputPassword = prompt("Введіть пароль!");
if (inputPassword == null) {
  message = "Скасовано користувачем!";
} else if (inputPassword == ADMAIN_PASSWORD) {
  message = "Ласкаво просимо!";
} else {
  message = "Доступ заборонений, невірний пароль!";
}
alert(message);
