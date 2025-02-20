let input;
let total = 0;

while (true) {
  input = prompt("Введіть число для додавання до загальної суми:");

  if (input === null) {
    break;
  }

  if (isNaN(input) || input === "") {
    alert("Було написано не число, спробуйте ще раз!");
  } else {
    total += Number(input);
  }
}

alert("Загальна сума чисел дорівнює " + total);
