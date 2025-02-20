function checkStorage(available, ordered) {
  let message;

  if (ordered === 0) {
    message = "У замовленні немає товарів";
  } else if (ordered > available) {
    message = "Ваше замовлення занадто велике, на складі недостатньо товарів!"; // Якщо замовлення більше за наявні товари
  } else {
    message = "Замовлення прийнято, наш менеджер зв'яжеться з вами."; // Якщо замовлення можна оформити
  }

  return message;
}
let available = 10;
let ordered = 5;

console.log(checkStorage(available, ordered));
