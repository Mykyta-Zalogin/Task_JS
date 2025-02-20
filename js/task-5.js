let country = prompt("Введіть країну для доставки:");
country = country.toLowerCase();
switch (country) {
  case "китай":
    console.log("Доставка в Китай буде коштувати 100 кредитів.");
    break;
  case "чилі":
    console.log("Доставка в Чилі буде коштувати 250 кредитів.");
    break;
  case "австралія":
    console.log("Доставка в Австралію буде коштувати 170 кредитів.");
    break;
  case "індія":
    console.log("Доставка в Індію буде коштувати 80 кредитів.");
    break;
  case "ямайка":
    console.log("Доставка в Ямайку буде коштувати 120 кредитів.");
    break;
  default:
    alert("В вашій країні доставка недоступна.");
}
